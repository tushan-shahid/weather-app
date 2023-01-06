import React from "react";
import { formatTime } from "../api/weatherApi";

function LocalTime({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex flex-row items-center justify-center my-6">
        <p className="text-white text-xl font-light">
          {formatTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-bold">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default LocalTime;
