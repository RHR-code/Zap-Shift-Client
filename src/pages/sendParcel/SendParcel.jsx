import React, { use } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../context/AuthContext";

const SendParcel = () => {
  const serviceCenter = useLoaderData();
  const navigate = useNavigate();
  const regionDuplicate = serviceCenter.map((reg) => reg.region);
  const regions = [...new Set(regionDuplicate)];
  const { user } = use(AuthContext);

  const { register, handleSubmit, control } = useForm();

  const axiosSecure = useAxiosSecure();

  const districtsByRegion = (region) => {
    const regionData = serviceCenter.filter((data) => data.region === region);
    const districts = regionData.map((data) => data.district);
    return districts;
  };
  const watchSenderRegion = useWatch({ control, name: "senderRegion" });
  const watchReceiverRegion = useWatch({ control, name: "receiverRegion" });

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.receiverDistricts === data.senderDistricts;
    const parcelWeight = data.parcelWeight;
    console.log(isDocument, isSameDistrict);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = extraCharge + minCharge;
      }
    }
    console.log("cost", cost);
    // cost
    data.cost = cost;
    Swal.fire({
      title: "Do you agree with the cost?",
      text: `You will be charged ${cost} taka !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I Agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            navigate("/dashboard/my-parcels");
            Swal.fire({
              title: "Successful!",
              text: "Parcel has created! please pay.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl text-secondary font-black my-5">Send A Parcel</h1>
      <h2 className="text-2xl font-bold text-secondary">
        Enter your parcel details
      </h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="">
        {/* parcel type */}
        <div className=" space-x-5 my-5">
          <label className="label">
            <input
              type="radio"
              value="document"
              {...register("parcelType")}
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              value="non-document"
              {...register("parcelType")}
              className="radio"
            />
            Not-Document
          </label>
        </div>
        {/* parcel details */}
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 space-y-5">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>
        {/* sender & receiver details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender */}
          <div>
            <h2 className="text-secondary text-2xl">Sender Details</h2>
            <fieldset className="fieldset space-y-3">
              {/* sender name */}
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                placeholder="Parcel Name"
              />
              {/* sender email */}
              <label className="label">Sender Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                {...register("senderEmail")}
                className="input w-full"
                placeholder="Sender Email"
              />

              {/* sender Region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Region</legend>
                <select
                  {...register("senderRegion")}
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
              {/* sender Districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select
                  {...register("senderDistricts")}
                  defaultValue="Pick a District"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtsByRegion(watchSenderRegion).map((reg, ind) => (
                    <option key={ind} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
              </fieldset>
              {/* sender address */}
              <label className="label">Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Address"
              />
              {/* sender phone no */}
              <label className="label">Sender Phone No</label>
              <input
                type="number"
                {...register("senderPhoneNo")}
                className="input w-full"
                placeholder="Sender Phone No"
              />
              {/* Pickup Instruction */}
              <label className="label">Pickup Instruction</label>
              <textarea
                {...register("senderInstruction")}
                id=""
                className="input h-[90px] w-full"
                placeholder="Pickup Instruction"
                rows="5"
              ></textarea>
            </fieldset>
          </div>
          {/* receiver */}
          <div>
            <h2 className="text-secondary text-2xl">Receiver Details</h2>
            <fieldset className="fieldset space-y-3">
              {/* Receiver name */}
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />
              {/* receiver email */}
              <label className="label">Receiver Email</label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />
              {/* Receiver Region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Region</legend>
                <select
                  {...register("receiverRegion")}
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
                <legend className="fieldset-legend">Receiver Districts</legend>
                <select
                  {...register("receiverDistricts")}
                  defaultValue="Pick a District"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(watchReceiverRegion).map((reg, ind) => (
                    <option key={ind} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
              </fieldset>
              {/* receiver address */}
              <label className="label">Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Address"
              />
              {/* receiver phone no */}
              <label className="label">Receiver Phone No</label>
              <input
                type="number"
                {...register("receiverPhoneNo")}
                className="input w-full"
                placeholder="Receiver Phone No"
              />
              {/* Pickup Instruction */}
              <label className="label">Pickup Instruction</label>
              <textarea
                {...register("receiverInstruction")}
                id=""
                className="input h-[90px] w-full"
                placeholder="Pickup Instruction"
                rows="5"
              ></textarea>
            </fieldset>
          </div>
        </div>
        <button className="btn btn-primary text-black w-2xs my-10">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
