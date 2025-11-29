import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const serviceCenter = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const regionDuplicate = serviceCenter.map((reg) => reg.region);
  const regions = [...new Set(regionDuplicate)];
  const { user } = useAuth();
  const districtsByRegion = (region) => {
    const regionData = serviceCenter.filter((data) => data.region === region);
    const districts = regionData.map((data) => data.district);
    return districts;
  };

  const watchRegion = useWatch({ control, name: "region" });

  const handleRiderApp = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Successful!",
          text: "Your Data Has Submitted.we will reach out in 14 days",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <div>
        <h1 className="text-5xl text-secondary font-black my-5">Be A Rider</h1>
        <h2 className="text-2xl font-bold text-secondary">
          Enter your parcel details
        </h2>
        <form onSubmit={handleSubmit(handleRiderApp)} className="">
          {/* sender & receiver details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* sender */}
            <div>
              <fieldset className="fieldset space-y-3">
                {/* sender name */}
                <label className="label">Rider Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className="input w-full"
                  placeholder="Parcel Name"
                />
                {/* sender email */}
                <label className="label">Rider Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  {...register("email")}
                  className="input w-full"
                  placeholder="Sender Email"
                />
                {/* sender NID no */}
                <label className="label">NID No</label>
                <input
                  type="number"
                  {...register("nid")}
                  className="input w-full"
                  placeholder="Sender Phone No"
                />

                {/* Pickup Instruction */}
                <label className="label">
                  Pickup Which wire-house you want to work
                </label>
                <label className="label"></label>
                <textarea
                  {...register("wirehouse")}
                  id=""
                  className="input h-[90px] w-full"
                  placeholder="Pickup Instruction"
                  rows="5"
                ></textarea>
              </fieldset>
            </div>
            {/* receiver */}
            <div>
              <fieldset className="fieldset space-y-3">
                {/* Receiver name */}
                <label className="label">Rider Age</label>
                <input
                  type="number"
                  {...register("age")}
                  className="input w-full"
                  placeholder="Receiver Name"
                />
                {/* Receiver Region */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Rider Region</legend>
                  <select
                    {...register("region")}
                    defaultValue="Pick a Region"
                    className="select w-full"
                  >
                    <option disabled={true}>Pick a Region</option>
                    {regions.map((reg, ind) => (
                      <option key={ind} value={reg}>
                        {reg}
                      </option>
                    ))}
                  </select>
                </fieldset>

                {/* Receiver Districts */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Rider District</legend>
                  <select
                    {...register("districts")}
                    defaultValue="Pick a District"
                    className="select w-full"
                  >
                    <option disabled={true}>Pick a district</option>
                    {districtsByRegion(watchRegion).map((reg, ind) => (
                      <option key={ind} value={reg}>
                        {reg}
                      </option>
                    ))}
                  </select>
                </fieldset>
                {/* receiver address */}
                <label className="label">Contact</label>
                <input
                  type="text"
                  {...register("address")}
                  className="input w-full"
                  placeholder="Contact"
                />
              </fieldset>
            </div>
          </div>
          <button className="btn btn-primary text-black w-2xs my-10">
            Apply to Become a Rider
          </button>
        </form>
      </div>
    </div>
  );
};

export default Rider;
