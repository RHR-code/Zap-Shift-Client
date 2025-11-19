import React from "react";
import serviceImg1 from "../../../assets/service.png";
import serviceImg2 from "../../../assets/delivery-van.png";
import serviceImg3 from "../../../assets/cash-on-delivery.png";
import serviceImg4 from "../../../assets/commerce.png";
import serviceImg5 from "../../../assets/delivery-man.png";
import serviceImg6 from "../../../assets/idea.png";
const OurServices = () => {
  const logisticsServices = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      img: serviceImg1,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      img: serviceImg2,
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      img: serviceImg6,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      img: serviceImg3,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      img: serviceImg5,
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      img: serviceImg4,
    },
  ];

  return (
    <div className="mt-24 bg-secondary  rounded-2xl p-5 md:p-[100px]">
      <div className="text-white">
        <h2 className="font-extrabold text-3xl pb-4 text-center">
          How It Works
        </h2>
        <p className="max-w-[718px] mx-auto text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {logisticsServices.map((card) => (
            <div
              key={card.id}
              className="p-8 shadow-2xl bg-white rounded-2xl flex flex-col items-center justify-between text-center"
            >
              <img className="w-20" src={card.img} alt="" />
              <h4 className="font-bold text-secondary mt-6 mb-4 text-xl">
                {card.title}
              </h4>
              <p className="font-medium">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
