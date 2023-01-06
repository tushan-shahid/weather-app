import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { useState } from "react";
function SearchInputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");
  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    } else {
      alert("Your browser does not support geolocation");
    }
  };
  const handleUnits = (e) => {
    const { name } = e.currentTarget;
    setUnits(name);
  };
  return (
    <div className="flex flex-col justify-center my-6">
      <div className="flex flex-row w-full items-center justify-center space-x-4">
        <input
          type="text "
          className="text-xl font-light p-2 rounded-lg focus:outline-none w-full shadow-xl capitalize placeholder:lowercase"
          placeholder="type your city name..."
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <RiSearchLine
          className="text-4xl text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearch}
        />
        <GoLocation
          className="text-3xl text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocation}
        />
      </div>
      <div className="flex flex-row w-full items-center justify-center mt-4">
        <button
          name="metric"
          className="text-xl text-white font-semiboldtransition ease-out hover:scale-125"
          onClick={handleUnits}
        >
          °C
        </button>
        <p className="text-white mx-2">|</p>
        <button
          name="imperial"
          className="text-xl font-semibold text-white transition ease-out hover:scale-125 "
          onClick={handleUnits}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default SearchInputs;
