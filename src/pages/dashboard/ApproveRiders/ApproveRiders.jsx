import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const statInfo = { status: status, email: rider.email };
    axiosSecure.patch(`riders/${rider._id}`, statInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          title: "Successful!",
          text: `Rider has been ${status}.`,
          icon: "success",
        });
      }
    });
  };

  const handleApprove = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const handleReject = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  return (
    <div>
      <h2 className="text-3xl">Riders Pending Approval: {riders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>District</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {riders.map((rider, ind) => (
              <tr key={rider._id}>
                <th>{ind + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>
                  {rider.status === "approved" ? (
                    <p className="text-green-400">{rider.status}</p>
                  ) : (
                    <p className="text-red-400">{rider.status}</p>
                  )}
                </td>
                <td>{rider.workStatus}</td>
                <td>{rider.districts}</td>
                <td>
                  <button onClick={() => handleApprove(rider)} className="btn ">
                    <FaUserCheck />
                  </button>
                  <button onClick={() => handleReject(rider)} className="btn ">
                    <IoPersonRemoveSharp />
                  </button>
                  <button className="btn ">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
