import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelName: parcel.parcelName,
      senderEmail: parcel.senderEmail,
      parcelId: parcel._id,
    };
    axiosSecure
      .post("/create-checkout-session", paymentInfo)
      .then((res) => {
        console.log(res.data);
        window.location.href = res.data.url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoading)
    return <span className="loading loading-spinner loading-xl"></span>;

  return (
    <div>
      <h2>
        Please pay {parcel.parcelName} : {parcel.cost}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        Pay
      </button>
    </div>
  );
};

export default Payment;
