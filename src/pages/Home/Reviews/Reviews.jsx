import React, { use } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Reviews = ({ reviewsPromise }) => {
  const reviewsData = use(reviewsPromise);
  console.log(reviewsData);

  return (
    <div className="mt-24">
      <h2 className="font-extrabold text-secondary text-3xl pb-4 text-center mb-5">
        What our customers are sayings
      </h2>
      <p className="text-center max-w-[832px] mx-auto pb-20">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            scale: 0.75,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviewsData.map((review) => (
            <SwiperSlide>
              <ReviewCard key={review.id} review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
