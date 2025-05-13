import React, { useEffect, useRef, useState } from "react";
import PlanImage from "./../../assets/2.jpg";
import axios from "axios";
import apartmentsC from "../apartInfo/ApartmentsC";
import { useLocation } from "react-router-dom";
import "./plan.css";

const PlanC = () => {
  const [fetchedApartments, setFetchedApartments] = useState([]);
  const [positions, setPositions] = useState({});
  const [loading, setLoading] = useState(true);
  const pathRefs = useRef({});
  const location = useLocation();
  const { floorNumber, block } = location.state || {};

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
    apartmentsC.forEach(({ id }) => {
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

  if (loading) {
    return <div style={{ marginTop: "100px", textAlign: "center" }}>Loading floor plan...</div>;
  }

  if (!block || !floorNumber) {
    return <div>Missing block or floor number</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "80px",
        overflow: "hidden",
      }}
    >
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2185 1282"
        width="100%"
        height="auto"
        style={{
          borderRadius: "12px",
          background: "#f9f9f9",
          overflow: "visible",
          position: "relative",
        }}
      >
        <defs>
          <image width={2185} height={1282} id="img1" href={PlanImage} />
        </defs>

        <g id="Layer 1">
          <use href="#img1" transform="matrix(1,0,0,1,0,0)" />
          {apartmentsC.map(({ id, d }) => {
            const apartname = `${block}-${floorNumber}${String(id).padStart(2, "0")}`;

            const fetchedApartment = fetchedApartments.find(
              (apt) => apt.apartmentNumber === apartname
            );

            const apartmentStatus = fetchedApartment ? fetchedApartment.status : "active";
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
                    href={`/apartment/${id}`}
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
                        transform={`translate(${positions[id].x - 50}, ${positions[id].y - 50})`}
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

export default PlanC;
