import React from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "../components/MobileMenu";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "../styles/navbar.css";

import Logo from "./../assets/logo.png";
const Layout = () => {
  const { t } = useTranslation();
  return (
    <div>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container" style={{display:"flex", justifyContent:'center'}}>

            <MobileMenu
              links={[
                { href: "/#home", text: t("nav.home") },
                { href: "/#listing", text: t("nav.listing") },
                { href: "/#house", text: t("nav.blocks") },
                { href: "/#design", text: t("nav.rooms") },
                { href: "/#about", text: t("nav.about") },
                { href: "/#staff", text: t("nav.staff") },
                { href: "/gallery", text: t("nav.gallery") },
                { href: "/#contact", text: t("nav.contact") },
              ]}
            />

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#home">
                  {t("nav.home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#listing">
                  {t("nav.listing")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#house">
                  {t("nav.blocks")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#design">
                  {t("nav.rooms")}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  {t("nav.about")}
                </a>
              </li>

              <li className="nav-item navbar-brand" >
                  <img src={Logo} alt={t("common.logo")} className="navbar-logo" />
              </li>


              <li className="nav-item">
                <a className="nav-link" href="/#staff">
                  {t("nav.staff")}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  {t("nav.gallery")}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#contact">
                  {t("nav.contact")}
                </a>
              </li>

              <li className="nav-item">
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Layout;
