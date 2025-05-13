import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import ClientImg from "../../assets/client.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("regular.testimonials.0.name"),
      text: t("regular.testimonials.0.text"),
      image: ClientImg,
    },
    {
      name: t("regular.testimonials.1.name"),
      text: t("regular.testimonials.1.text"),
      image: ClientImg,
    },
    {
      name: t("regular.testimonials.2.name"),
      text: t("regular.testimonials.2.text"),
      image: ClientImg,
    },
  ];

  return (
    <section className="client_section layout_padding">
      <Container fluid="md">
        <div className="heading_container mb-5 text-center">
          <h2>{t("regular.testimonials.title")}</h2>
        </div>

        <Carousel
          indicators={false}
          nextIcon={<span className="carousel-control-next-icon" />}
          prevIcon={<span className="carousel-control-prev-icon" />}
        >
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center text-center">
                <Col>
                  <div className="box">
                    <div className="img-box mx-auto mb-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="client-img"
                      />
                    </div>
                    <div className="detail-box">
                      <h5>
                        <span>{testimonial.name}</span>
                        <hr />
                      </h5>
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonial;
