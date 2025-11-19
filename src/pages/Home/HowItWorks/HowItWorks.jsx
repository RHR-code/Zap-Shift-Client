import React from "react";
import HIWImg1 from "../../../assets/delivery-van.png";
import HIWImg2 from "../../../assets/cash-on-delivery.png";
import HIWImg3 from "../../../assets/building.png";
import HIWImg4 from "../../../assets/warehouse.png";
const HowItWorks = () => {
  const services = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "Quick doorstep pickup and secure drop-off for all your personal and business parcels.",
      img: HIWImg1,
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "Reliable COD service that allows customers to pay upon delivery — ideal for online businesses.",
      img: HIWImg2,
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "Efficient hub-based delivery system ensuring faster routing and smooth parcel movement.",
      img: HIWImg3,
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "Customized logistics solutions crafted for SMEs and corporate-level shipment demands.",
      img: HIWImg4,
    },
  ];

  return (
    <div className="md:px-20 px-5 mt-24">
      <h2 className="font-extrabold text-secondary text-3xl text-center md:text-start">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {services.map((card) => (
          <div key={card.id} className="p-8 shadow-2xl">
            <img className="w-20" src={card.img} alt="" />
            <h4 className="font-bold text-secondary mt-6 mb-4 text-xl">
              {card.title}
            </h4>
            <p className="font-medium">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
