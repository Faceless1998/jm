import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Apartment.css";
// import studio1 from "../applan/studio/1.png";
// import studio2 from "../applan/studio/2.png";
// import studio3 from "../applan/studio/3.png";

// import abig1 from "../applan/abig/1.png";
// import abig2 from "../applan/abig/2.png";
// import abig3 from "../applan/abig/3.png";

// import ahuge1 from "../applan/ahuge/1.png";
// import ahuge2 from "../applan/ahuge/2.png";
// import ahuge3 from "../applan/ahuge/3.png";

// import bbig1 from "../applan/bbig1/1.png";
// import bbig2 from "../applan/bbig1/2.png";
// import bbig3 from "../applan/bbig1/3.png";

// import abbig1 from "../applan/abbig/1.png";
// import abbig2 from "../applan/abbig/2.png";
// import abbig3 from "../applan/abbig/3.png";

const Apartment = () => {
  const { apartmentNumber } = useParams();
  const [apartmentData, setApartmentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [chosenPhone, setChosenPhone] = useState(null);

  const lastTwoChars = apartmentNumber?.slice(-2);
  const blockLetter = apartmentNumber?.[0];

  const useStudioImages =
    (["02", "03", "05", "12"].includes(lastTwoChars) && blockLetter === "B") ||
    (blockLetter === "A" && ["04", "05", "06", "11"].includes(lastTwoChars));

  const useABigImages =
    blockLetter === "A" && ["01", "14"].includes(lastTwoChars);

  const useAHugeImages = blockLetter === "A" && ["09"].includes(lastTwoChars);

  const useBHugeImages =
    blockLetter === "B" && ["08", "01"].includes(lastTwoChars);

  const abbig =
    (["04", "09"].includes(lastTwoChars) && blockLetter === "B") ||
    (blockLetter === "A" && ["07"].includes(lastTwoChars));

  const imageUrls = [
        "https://placehold.co/800x500/31353b/ffffff?text=Living+Room",
        "https://placehold.co/800x500/3b3f46/ffffff?text=Bedroom",
        "https://placehold.co/800x500/2e3136/ffffff?text=Kitchen",
        "https://placehold.co/800x500/4a4f56/ffffff?text=Bathroom",
      ]

  const phoneNumbers = ["577550905", "555282865"]; // Without spaces for tel: links

  useEffect(() => {
    if (!apartmentNumber) return;

    const fetchApartment = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/apartments/${apartmentNumber}`
        );
        setApartmentData(response.data);
      } catch (error) {
        console.error("Error fetching apartment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApartment();
  }, [apartmentNumber]);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  const handleCallLinkClick = (e) => {
    if (!chosenPhone) {
      const random =
        phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
      setChosenPhone(random);
    }
  };

  const calculateTotalPrice = () => {
    return apartmentData ? apartmentData.price * apartmentData.squareMeter : 0;
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!apartmentData)
    return <div className="not-found">Apartment not found.</div>;

  return (
    <div className="apartment-wrapper">
      <div className="slider-box">
        <img
          src={imageUrls[currentImage]}
          alt="Apartment"
          className="slider-image"
        />
        <div className="slider-controls">
          <button onClick={handlePrev}>&#10094;</button>
          <button onClick={handleNext}>&#10095;</button>
        </div>
      </div>

      <div className="apartment-card">
        <div className="info-block">
          <h2 className="apartment-title">
            Apartment {apartmentData.apartmentNumber}
          </h2>
          <div className="price">
            <h3>
              Price per m²: <span>${apartmentData.price}</span>
            </h3>
            <h3>
              Total Price: <span>${calculateTotalPrice()}</span>
            </h3>
          </div>
          <ul className="apartment-info">
            <li>
              <strong>Size:</strong> {apartmentData.squareMeter} m²
            </li>
            <li>
              <strong>Status:</strong>{" "}
              <span className={`status ${apartmentData.status}`}>
                {apartmentData.status}
              </span>
            </li>
          </ul>
        </div>

        <div className="action-block">
          <h3>Your Dream Apartment Awaits</h3>
          <p>
            Modern, comfortable, and stylish living — tailored to your
            lifestyle.
          </p>
          {/* <button className="btn primary">Book a Viewing</button> */}

          <a
            className="btn secondary"
            href={`tel:${
              chosenPhone ||
              phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)]
            }`}
            onClick={handleCallLinkClick}
          >
            Call Agent
          </a>

          {chosenPhone && (
            <p className="phone-number">
              Calling: <strong>{chosenPhone}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
