import React from "react";
import bg1 from "../../../assets/location-merchant.png";
import bg2 from "../../../assets/be-a-merchant-bg.png";
const Priority = () => {
  return (
    <div className="bg-secondary p-20 relative rounded-2xl mt-24">
      <img className="absolute right-10" src={bg1} alt="" />
      <img className="absolute top-0" src={bg2} alt="" />
      <div className="space-y-5">
        <h2 className="max-w-[670px] font-extrabold text-white text-[40px]">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>
        <p className="max-w-[500px] text-white/80">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className=" space-x-5">
          <button className="btn btn-primary rounded-full text-black text-lg font-semibold">
            Become a Merchant
          </button>
          <button className="btn btn-outline btn-primary rounded-full hover:text-black text-lg font-semibold">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Priority;
