import React from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css"; // Add this line to import custom styles

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <section className="hero-slider">
        <div className="hero-inner">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="hero-details">
                <h1>
                  <span>{t("translation.title")}</span>
                </h1>
                <p>{t("translation.description")}</p>
                <div className="hero-btn-box">
                  <a href="/#contact" className="hero-btn-cta">
                    {t("translation.buttonText")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
