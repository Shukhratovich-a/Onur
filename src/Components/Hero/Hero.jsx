import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import useLocalization from "../../Hooks/useLocalization";

// import SliderVideo1 from "../../Assets/Videos/SliderVideo1.mp4";
// import SliderVideo2 from "../../Assets/Videos/SliderVideo2.mp4";

import It from "../../Assets/Images/Hero/It.jpg";
import Logistic from "../../Assets/Images/Hero/Logistic.jpg";
import Plumbing from "../../Assets/Images/Hero/Plumbing.jpg";
import Accounting from "../../Assets/Images/Hero/Accounting.jpg";
import Distribution from "../../Assets/Images/Hero/Distribution.jpg";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./HeroSlider.scss";
import styles from "./Hero.module.scss";

const Hero = () => {
  const localization = useLocalization();

  const services = [
    { name: "it", image: It },
    { name: "logistic", image: Logistic },
    { name: "plumbing", image: Plumbing },
    { name: "accounting", image: Accounting },
    { name: "distribution", image: Distribution },
  ];

  return (
    <section className={styles.hero}>
      <Swiper
        className={styles.hero__slider}
        slidesPerView={1}
        spaceBetween={15}
        speed={800}
        pagination={{
          type: "fraction",

          formatFractionCurrent: (number) => {
            return String(number).padStart(2, 0);
          },
          formatFractionTotal: function (number) {
            return String(number).padStart(2, 0);
          },
          renderFraction: (currentClass, totalClass) => {
            return (
              `<span class='${currentClass} ${styles.hero__pagination__number}'></span>` +
              `<span class='${styles.hero__pagination__drop}'>/</span>` +
              `<span class='${totalClass} ${styles.hero__pagination__number}'></span>`
            );
          },
        }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop="true"
        modules={[Navigation, Pagination, Autoplay]}
      >
        {services.length &&
          services.map((service, index) => (
            <SwiperSlide
              className={`${styles.hero__slide}`}
              style={{ backgroundImage: `url(${service.image})` }}
              key={index}
            >
              <div className={`container ${styles.container}`}>
                <h1 className={`${styles.hero__heading}`}>{localization.hero[service.name]}</h1>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Hero;
