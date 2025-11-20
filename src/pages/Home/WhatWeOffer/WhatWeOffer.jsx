import React from "react";
import img1 from "../../../assets/live-tracking.png";
import img2 from "../../../assets/bookingIcon.png";
import img3 from "../../../assets/safe-delivery.png";
const WhatWeOffer = () => {
  const features = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
      image: img1,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: img3,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: img3,
    },
  ];

  return (
    <div className="mt-24">
      {features.map((item) => (
        <div
          key={item.id}
          className="flex items-center mb-10 bg-white shadow-sm p-5 rounded-2xl"
        >
          <img src={item.image} alt="" className="pr-10" />
          <div className="border-l-3 border-dotted border-secondary space-y-3 pl-10">
            <h3 className="font-extrabold text-secondary text-2xl">
              {item.title}
            </h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatWeOffer;
