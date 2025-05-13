import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <div className="d-flex align-items-center">
        <p className="footer-text" style={{ color: "white" }}>
          &copy; 2025 {t("footer.companyName")}. {t("footer.rightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
