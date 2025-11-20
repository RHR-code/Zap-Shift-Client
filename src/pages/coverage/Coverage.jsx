import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);
  const mapRef = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchedText = e.target.search.value;
    const district = serviceCenters.find((location) =>
      location.district.toLowerCase().includes(searchedText.toLowerCase())
    );
    if (district) {
      const cordinate = [district.latitude, district.longitude];
      console.log(cordinate);
      mapRef.current.flyTo(cordinate, 12);
    }
  };
  return (
    <div>
      this is coverage
      {/* search */}
      <form
        className="my-10  w-full flex justify-center "
        onSubmit={handleSearch}
      >
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" required placeholder="Search" />
        </label>
      </form>
      <div className="border h-[800px]">
        <MapContainer
          className="h-[800px]"
          center={position}
          zoom={7}
          ref={mapRef}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>Our Coverage Areas:</strong> <br />{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
