import React from "react";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Brand from "../Brand/Brand";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch("./reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <Brand />
      </div>
      <div>
        <Reviews reviewsPromise={reviewsPromise} />
      </div>
    </div>
  );
};

export default Home;
