import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { IoArrowUpCircle } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="relative">
          <img src={bannerImg1} />
          <p className="absolute md:bottom-20 md:left-23 text-left max-w-2xl  hidden md:flex">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <button className="btn btn-primary rounded-full absolute md:bottom-8 border-2 border-secondary md:left-23 left-5 text-secondary bottom-0 text-sm">
            Track Your Parcel
          </button>
          <IoArrowUpCircle
            className="rotate-45 absolute md:bottom-8 bottom-0 md:left-62 left-42"
            size={40}
          />
          <button className="btn btn-primary border-2 border-secondary btn-outline rounded-full absolute md:bottom-8 bottom-0  md:left-75 left-54 text-secondary">
            Be a Rider
          </button>
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
