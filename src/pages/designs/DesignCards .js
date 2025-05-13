import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./DesignCards.css";

const TabCard = ({ id, tabs }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("2d");

  return (
    <div className="card">
      <div className="card-header">
        <h3>{t(`design.${id}`)}</h3>
      </div>

      <div className="tabs">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            className={activeTab === key ? "tab active" : "tab"}
            onClick={() => setActiveTab(key)}
          >
            {t(`design.${key}.label`)}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <img
          src={tabs[activeTab].image}
          alt=" "
        />
        <h4>{t(`design.${activeTab}.title`)}</h4>
        <p>{t(`design.${activeTab}.description`)}</p>
      </div>
    </div>
  );
};

export const DesignCards = () => {
  const { t } = useTranslation();

  const cardData = [
    { id: "studio", tabs: { "2d": {}, "3d": {} } },
    { id: "oneBedroom", tabs: { "2d": {}, "3d": {} } },
    { id: "twoBedroom", tabs: { "2d": {}, "3d": {} } },
    { id: "corner", tabs: { "2d": {}, "3d": {} } },
  ];

  // Inject image URLs dynamically for simplicity (can move to translations if needed)
  const images = {
    "studio": {
      "2d": "https://placehold.co/800x500/31353b/ffffff?text=Living+Room",
      "3d": "https://placehold.co/800x500/31353b/ffffff?text=Living+Room"
    },
    "oneBedroom": {
      "2d": "https://placehold.co/800x500/31353b/ffffff?text=Living+Room",
      "3d": "https://placehold.co/800x500/31353b/ffffff?text=Living+Room"
    },
    "twoBedroom": {
      "2d": "https://placehold.co/800x500/31353b/ffffff?text=Living+Room",
      "3d": "https://placehold.co/800x500/31353b/ffffff?text=Living+Room"
    },
    "corner": {
      "2d": "https://placehold.co/800x500/31353b/ffffff?text=Living+Room",
      "3d": "https://placehold.co/800x500/31353b/ffffff?text=Living+Room"
    },
  };

  return (
    <div
      style={{
        background: "radial-gradient(circle at center, #e6ecf3, #cadbe9)",
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="heading_container text-center mb-5">
        <h2>{t("design.title")}</h2>
      </div>

      <div className="card-container">
        {cardData.map((card, idx) => (
          <TabCard
            key={idx}
            id={card.id}
            tabs={{
              "2d": { image: images[card.id]["2d"] },
              "3d": { image: images[card.id]["3d"] },
            }}
          />
        ))}
      </div>
    </div>
  );
};
