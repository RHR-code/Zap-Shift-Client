import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstart from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";
const Brand = () => {
  const brands = [
    amazon,
    amazon_vector,
    casio,
    moonstart,
    randstad,
    star,
    start_people,
  ];
  return (
    <div className="mt-24 ">
      <h2 className="font-extrabold text-secondary text-3xl pb-4 text-center mb-5">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brand;
