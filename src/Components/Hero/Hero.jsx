import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper";

import useLocalization from "../../Hooks/useLocalization";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styles from "./Hero.module.scss";
import "./HeroSlider.scss";

const Hero = () => {
  const [localization] = useLocalization();

  const [slides, setSlides] = React.useState([]);

  // for (let obj in localization.hero) {
    // console.log(localization[obj]);
  // }

  console.log(localization.hero);

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
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop="true"
        mousewheel={{
          forceToAxis: true,
        }}
        modules={[Navigation, Pagination, Autoplay, Mousewheel]}
      >
        <SwiperSlide
          className={`${styles.hero__slide}`}
          style={{ backgroundImage: `url(${"https://picsum.photos/1920/1080"})` }}
        >
          <div className={`container ${styles.container}`}>
            <h1 className={styles.hero__heading}>sd</h1>
            <p className={styles.hero__description}>
              Мы ориентируемся на функциональность комфорт и эстетику вашей ванной комнаты
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${styles.hero__slide}`}
          style={{ backgroundImage: `url(${"https://picsum.photos/1920/1081"})` }}
        >
          <div className={`container ${styles.container}`}>
            <h1 className={styles.hero__heading}>
              O‘zbekiston va Turkiyani bog‘lovchi yetakchi savdo kompaniyalaridan biri bo‘lish
            </h1>
            <p className={styles.hero__description}>
              Мы ориентируемся на функциональность комфорт и эстетику вашей ванной комнаты
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${styles.hero__slide}`}
          style={{ backgroundImage: `url(${"https://picsum.photos/1920/1082"})` }}
        >
          <div className={`container ${styles.container}`}>
            <h1 className={styles.hero__heading}>
              Nova добавляет элегантности вашей ванной комнате
            </h1>
            <p className={styles.hero__description}>
              Мы ориентируемся на функциональность комфорт и эстетику вашей ванной комнаты
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
