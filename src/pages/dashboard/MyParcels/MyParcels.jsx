import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });
  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`parcels/${id}`)
          .then((res) => {
            console.log(res);
            if (res.data.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  const handlePayment = async (data) => {
    console.log(data);

    const paymentInfo = {
      cost: data.cost,
      parcelName: data.parcelName,
      senderEmail: data.senderEmail,
      parcelId: data._id,
    };
    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo
    );
    window.location.assign(res.data.url);
  };

  return (
    <div>
      <h2>All of my parcels : {parcels.length}</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, ind) => (
              <tr key={parcel._id}>
                <th>{ind + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="btn bg-green-300">Paid</span>
                  ) : (
                    // <Link
                    //   to={`/dashboard/payment/${parcel._id}`}
                    //   className="btn btn-primary text-black"
                    // >
                    //   Pay
                    // </Link>
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-primary text-black"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <div className="space-x-3">
                    <button className="btn btn-square hover:bg-green-300">
                      <FaRegEdit />
                    </button>
                    <button className="btn btn-square hover:bg-blue-300">
                      <GrView />
                    </button>
                    <button
                      onClick={() => handleParcelDelete(parcel._id)}
                      className="btn btn-square hover:bg-red-300"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
