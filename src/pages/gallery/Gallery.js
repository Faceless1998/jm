import React, { useState } from "react";
import "../../css/gallery.css";

import ft1 from "../../assets/ft1.png";
import ft2 from "../../assets/ft2.png";
import ft3 from "../../assets/ft3.png";
import ft4 from "../../assets/ft4.png";
import ft5 from "../../assets/ft5.png";
import ft6 from "../../assets/ft6.png";
import ft7 from "../../assets/ft7.png";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [ft1, ft2, ft3, ft4, ft5, ft6, ft7];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      /* Custom Scrollbar Styles */\n      ::-webkit-scrollbar {\n        width: 16px;\n        height: 16px;\n      }\n\n      ::-webkit-scrollbar-track {\n        background-color: #f1f1f1;\n        border-radius: 8px;\n        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);\n      }\n\n      ::-webkit-scrollbar-thumb {\n        background-color:rgb(83, 83, 85);\n        border-radius: 8px;\n        border: 4px solid #f1f1f1;\n        transition: background-color 0.3s ease;\n      }\n\n      ::-webkit-scrollbar-thumb:hover {\n        background-color: #e3c729;\n      }\n\n      ::-webkit-scrollbar-horizontal {\n        height: 16px;\n      }\n\n      body {\n        margin: 0;\n        padding: 0;\n        background-color: #f4f4f4;\n      }\n\n      .header_section {\n        background-color: rgba(\n          161,\n          189,\n          221,\n          0.1\n        ); /* Almost fully transparent */\n        padding: 5px 0;\n        width: 100%;\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 1000;\n        transition: background-color 0.3s ease-in-out;\n      }\n\n      .header_section.scrolled {\n        background-color: #1164c3; /* Solid color after scrolling */\n      }\n\n      .navbar {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 20px;\n      }\n\n      .navbar-brand img {\n        height: 40px;\n        width: 125px;\n      }\n\n      .navbar-nav {\n        display: flex;\n        gap: 20px;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      .nav-item a {\n        text-decoration: none;\n        color: white;\n        font-size: 16px;\n        font-weight: bold;\n        transition: transform 0.3s ease, padding 0.3s ease;\n      }\n\n      .nav-item a:hover {\n        transform: scale(1.1);\n        padding: 12px 24px;\n      }\n\n      .User_option {\n        display: flex;\n        gap: 15px;\n        margin-left: auto;\n      }\n\n      .User_option a {\n        padding: 10px 20px;\n        border-radius: 5px;\n        text-decoration: none;\n        font-weight: bold;\n        transition: transform 0.3s ease, padding 0.3s ease;\n      }\n\n      .User_option a:first-child {\n        background-color: transparent;\n        border: 2px solid white;\n        color: white;\n      }\n\n      .User_option a:last-child {\n        background-color: #ff9800;\n        color: white;\n      }\n    ",
        }}
      />

      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Feature ${index + 1}`} />
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <button className="nav-button prev" onClick={handlePrevImage}>
              &#8249;
            </button>
            <div className="modal-content">
              <img src={images[selectedIndex]} alt="Enlarged view" />
            </div>
            <button className="nav-button next" onClick={handleNextImage}>
              &#8250;
            </button>
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
