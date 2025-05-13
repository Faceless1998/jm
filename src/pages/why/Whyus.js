import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

import U1 from "./../../assets/U1.png";
import U2 from "./../../assets/U2.png";
import U3 from "./../../assets/U3.png";
import U4 from "./../../assets/U4.png";

const Whyus = () => {
  const { t } = useTranslation();

  const stats = [
    { img: U1, value: 1000, label: t("regular.whyus.years") },
    { img: U2, value: 6, label: t("regular.whyus.projects") },
    { img: U3, value: 10000, label: t("regular.whyus.customers") },
    { img: U4, value: 1500, label: t("regular.whyus.rates") },
  ];

  return (
    <section className="us_section layout_padding2">
      <Container>
        <div className="heading_container text-center mb-5">
          <h2>{t("regular.whyus.title")}</h2>
        </div>
        <Row>
          {stats.map((item, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="mb-4">
              <div className="box text-center">
                <div className="img-box mb-3">
                  <img src={item.img} alt={item.label} className="img-fluid" />
                </div>
                <div className="detail-box">
                  <h3 className="price">
                    <CountUp end={item.value} duration={2} separator="," />+
                  </h3>
                  <h5>{item.label}</h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Whyus;
