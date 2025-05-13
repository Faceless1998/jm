import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperOverrides.css"; // for Swiper-specific global styles

import styles from "./Slider.module.css";

const Staff = () => {
  const { t } = useTranslation(); // Hook for translation

  const slides = [
    {
      image: "z1.jpg",
      titleKey: "staff.cardOne",
      descriptionKey: "staff.descriptionOne",
    },
    {
      image: "z2.jpg",
      titleKey: "staff.cardTwo",
      descriptionKey: "staff.descriptionTwo",
    },
    {
      image: "z3.jpg",
      titleKey: "staff.cardThree",
      descriptionKey: "staff.descriptionThree",
    },
    {
      image: "z4.jpg",
      titleKey: "staff.cardFour",
      descriptionKey: "staff.descriptionFour",
    },
    {
      image: "z5.jpg",
      titleKey: "staff.cardFive",
      descriptionKey: "staff.descriptionFive",
    },
  ];

  return (
    <section>
      <div className="heading_container text-center mb-5">
        <h2>{t("staff.staff")}</h2> {/* Translates the "Staff" header */}
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1, // 👈 1 card per view on mobile
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.card}>
                <img
                  src={require(`../../assets/${slide.image}`)}
                  alt={t(slide.titleKey)} // Dynamic title translation
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{t(slide.titleKey)}</h3> {/* Translated title */}
                  <p className={styles.cardDescription}>{t(slide.descriptionKey)}</p> {/* Translated description */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Staff;
