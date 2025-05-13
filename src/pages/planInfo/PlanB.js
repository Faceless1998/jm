import React, { useEffect, useRef, useState } from "react";
import PlanImage from "./../../assets/2.jpg";
import axios from "axios";
import apartmentsB from "../apartInfo/ApartmentsB";
import { useLocation, useNavigate } from "react-router-dom";
import "./plan.css";

const PlanB = () => {
  const [fetchedApartments, setFetchedApartments] = useState([]);
  const [positions, setPositions] = useState({});
  const [loading, setLoading] = useState(true);
  const pathRefs = useRef({});
  const location = useLocation();
  const navigate = useNavigate();
  const { floorNumber = 1, block = "B" } = location.state || {};

  // Fetch apartments from backend
  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/apartments");
        setFetchedApartments(response.data);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApartments();
  }, []);

  // Calculate tooltip positions after apartments are rendered
  useEffect(() => {
    const newPositions = {};
    apartmentsB.forEach(({ id }) => {
      const node = pathRefs.current[id];
      if (node) {
        const bbox = node.getBBox();
        newPositions[id] = {
          x: bbox.x + bbox.width / 2,
          y: bbox.y + bbox.height / 2,
        };
      }
    });
    setPositions(newPositions);
  }, [fetchedApartments]);

  // Function to get max floor for each block
  const getMaxFloor = (block) => {
    const maxFloors = { A: 24, B: 26, C: 27 };
    return maxFloors[block] || 27;
  };

  const handlePrev = () => {
    if (floorNumber > 1) {
      navigate("/planb", { state: { block, floorNumber: floorNumber - 1 } });
    }
  };

  const handleNext = () => {
    const maxFloor = getMaxFloor(block);
    if (floorNumber < maxFloor) {
      navigate("/planb", { state: { block, floorNumber: floorNumber + 1 } });
    }
  };

  const isNextDisabled = floorNumber >= getMaxFloor(block);
  const isPrevDisabled = floorNumber <= 1;

  if (loading) {
    return (
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        Loading floor plan...
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "180px",
        overflow: "hidden",
      }}
    >
      <div className="plan-header"         style={{ marginTop: "50px" }}
      >
        <h2>
          Floor {floorNumber} - Block {block}
        </h2>
        <div className="floor-controls">
          <button
            className="floor-button"
            onClick={handlePrev}
            disabled={isPrevDisabled}
          >
            ← Prev
          </button>
          <button
            className="floor-button"
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            Next →
          </button>
        </div>
      </div>

      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2185 1282"
        width={2185}
        height={1282}
        style={{ marginTop: "100px" }}
      >
        <defs>
          <image width={2185} height={1282} id="img1" href={PlanImage} />
        </defs>

        <g id="Layer 1">
          <use href="#img1" transform="matrix(1,0,0,1,0,0)" />
          {apartmentsB.map(({ id, d }) => {
            const apartname = `${block}-${floorNumber}${String(id).padStart(
              2,
              "0"
            )}`;
            const fetchedApartment = fetchedApartments.find(
              (apt) => apt.apartmentNumber === apartname
            );

            const apartmentStatus = fetchedApartment?.status || "active";
            const area = fetchedApartment?.squareMeter || "-";

            const hoverClass =
              apartmentStatus === "sold"
                ? "sold"
                : apartmentStatus === "reserved"
                ? "reserved"
                : "active";

            return (
              <a
                key={id}
                href={`/apartment/${apartname}`}
                aria-label={`Apartment ${apartname}`}
                className="posicon"
              >
                <path
                  ref={(el) => (pathRefs.current[id] = el)}
                  className={`clickable ${hoverClass}`}
                  d={d}
                />
                {positions[id] && (
                  <g
                    className="info-group"
                    transform={`translate(${positions[id].x - 50}, ${
                      positions[id].y - 50
                    })`}
                  >
                    <g className="hover-shift">
                      <rect
                        className="info-bg"
                        width="120"
                        height="50"
                        x="-60"
                        y="-40"
                      />
                      <text
                        className="info-text"
                        x="0"
                        y="-20"
                        textAnchor="middle"
                      >
                        {apartname}
                      </text>
                      <text
                        className="area-text"
                        x="0"
                        y="0"
                        textAnchor="middle"
                      >
                        {area} m²
                      </text>
                    </g>

                    {apartmentStatus !== "active" && (
                      <text
                        x="0"
                        y="0"
                        textAnchor="middle"
                        transform="rotate(-30)"
                        className={`watermark ${apartmentStatus}`}
                      >
                        {apartmentStatus.toUpperCase()}
                      </text>
                    )}
                  </g>
                )}
              </a>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default PlanB;
