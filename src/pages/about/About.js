import React from "react";
import { useTranslation } from "react-i18next";
import Square from "./../../assets/square.png";
import AboutImg from "./../../assets/about-img.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about_section layout_padding-bottom">
      <div className="square-box">
        <img src={Square} alt={t("about.squareAlt")} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={AboutImg} alt={t("about.imageAlt")} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>{t("regular.about.title")}</h2>
              </div>
              <p>{t("regular.about.description")}</p>
              <a href="/#contact">{t("regular.about.readMore")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
