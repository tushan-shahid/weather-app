import React from "react";
import { iconUrl } from "../api/weatherApi";
import "animate.css";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-4 mb-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-around text-white mt-4 rounded-lg shadow-lg bg-blue-400 p-2">
        {items.map((item) => (
          <div class="block p-1 rounded-lg shadow-lg bg-sky-500 ">
            <p className="font-light text-sm mt-2 items-center justify-center flex">
              {item.title}
            </p>
            <img
              src={iconUrl(item.icon)}
              alt=""
              className="w-12 my-1 items-center justify-center flex animate__animated animate__bounce"
            />

            <p className="font-medium mb-4 items-center justify-center flex">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
