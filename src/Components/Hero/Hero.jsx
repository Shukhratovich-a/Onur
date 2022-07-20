import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// import useLocalization from "../../Hooks/useLocalization";

import SliderVideo1 from "../../Assets/Videos/SliderVideo1.mp4";
import SliderVideo2 from "../../Assets/Videos/SliderVideo2.mp4";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styles from "./Hero.module.scss";
import "./HeroSlider.scss";

const Hero = () => {
  // const localization = useLocalization();

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
        // autoplay={{
        //   delay: 8000,
        //   disableOnInteraction: false,
        // }}
        // loop="true"
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide className={`${styles.hero__slide}`}>
          <div>
            <video className={styles.hero__slide__video} muted loop autoPlay>
              <source src={SliderVideo1} type="video/mp4" />
            </video>
          </div>
          {/* <div className={`container ${styles.container}`}>
            <h1 className={styles.hero__heading}>{localization.hero.slide1.heading}</h1>
            <p className={styles.hero__description}>
              Мы ориентируемся на функциональность комфорт и эстетику вашей ванной комнаты
            </p>
          </div> */}
        </SwiperSlide>
        <SwiperSlide className={`${styles.hero__slide}`}>
          <div>
            <video className={styles.hero__slide__video} muted loop autoPlay>
              <source src={SliderVideo2} type="video/mp4" />
            </video>
          </div>
          {/* <div className={`container ${styles.container}`}>
            <h1 className={styles.hero__heading}>{localization.hero.slide1.heading}</h1>
            <p className={styles.hero__description}>
              Мы ориентируемся на функциональность комфорт и эстетику вашей ванной комнаты
            </p>
          </div> */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
