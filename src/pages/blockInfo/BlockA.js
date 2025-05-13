import React, { useState, useEffect } from "react";
import "./block.css";
import ft2 from "../../assets/UNIVERSAMI 010.png";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import floorsA from "../floorInfo/FloorsA";

const BlockA = () => {
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

  const handleMouseEnter = (event, text) => {
    setTooltipText(text);
    setIsVisible(true);
    setTooltipPosition({ x: event.pageX + 10, y: event.pageY + 10 });
  };

  const handleMouseMove = (event) => {
    setTooltipPosition({ x: event.pageX + 10, y: event.pageY + 10 });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const selectedBlock = "A";
  
  console.log("Selected Block:", selectedBlock);
  const handleClick = (floor) => {
    const floorNumber = floor.floorNumber || parseInt(floor.id.match(/\d+/)?.[0]);
  
    let targetPath = "/plana"; // default
  
  
  
    navigate(targetPath, {
      state: { floorNumber, block: selectedBlock },
    });
  };
  let filteredFloors = [];
  if (selectedBlock === "A") {
    filteredFloors = floorsA.filter((floor) => {
      const number = parseInt(floor.id.match(/\d+/)?.[0]);
      return number >= 1 && number <= 24;
    });
  } else if (selectedBlock === "B") {
    filteredFloors = floorsA.filter((floor) => {
      const number = parseInt(floor.id.match(/\d+/)?.[0]);
      return number >= 1 && number <= 26;
    });
  } else if (selectedBlock === "C") {
    filteredFloors = floorsA.filter((floor) => {
      const number = parseInt(floor.id.match(/\d+/)?.[0]);
      return number >= 1 && number <= 27;
    });  }


  return (
    <div>
      <div
        className="tooltip"
        style={{
          position: "absolute",
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "5px",
          borderRadius: "3px",
        }}
      >
        {tooltipText}
      </div>

      <div style={{ textAlign: "center", margin: "150px  0 60px" }}>
    <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
{selectedBlock ? `${t("regular.block")} ${selectedBlock}` : t("regular.block")}
    </h2>
  </div>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 6000">
        <title> JM Tower </title>
        <defs>
          <image width={7000} height={3938} id="ft2" href={ft2} />
          <filter x="-50%" y="-50%" width="200%" height="200%" id="f1">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        <g id="Layer 1">
          <use id="Background" href="#ft2" transform="matrix(1,0,0,1,0,0)" />
          {filteredFloors.map((floor) => (
            <path
              key={floor.id}
              data-tooltip={floor.tooltip}
              id={floor.id}
              fillRule="evenodd"
              className={floor.id}
              d={floor.path}
              onMouseEnter={(e) => handleMouseEnter(e, floor.tooltip)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(floor)} // << make sure to pass floor here
            />
          ))}
           <path
              key={25}
              data-tooltip={"Block B"}
              fillRule="evenodd"
              d="m4611.3 963.3l3.4 2175.7-972.3-34.5-3.4-2313.6-38-17.3 3.5-41.3z"
              // onMouseEnter={(e) => handleMouseEnter(e, floor.tooltip)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate("/blockb", { state: { block: "B" } })}
            />
            <path
              key={25}
              data-tooltip={"Block C"}
              fillRule="evenodd"
              d="m4694.1 3180.3h358.5 148.3l675.8-31 10.4-2427.4-106.9-34.5-79.3 41.4-106.9-31-41.4 10.3-106.9-24.1-31 20.7-120.7-37.9-82.7 51.7-10.4 41.3-48.3 31.1-86.2 13.8-68.9-13.8-10.4-31.1-179.3-48.2-186.2 144.8v2292.9zz"
              // onMouseEnter={(e) => handleMouseEnter(e, floor.tooltip)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate("/blockc", { state: { block: "C" } })}
            />
        </g>
      </svg>
    </div>
  );
};

export default BlockA;
