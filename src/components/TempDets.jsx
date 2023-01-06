import React from "react";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { formatTime, iconUrl } from "../api/weatherApi";
import "animate.css";
function TempDets({
  weather: {
    temp,
    feels_like,
    humidity,
    speed,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    timezone,
    details,
    icon,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-blue-900">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-center p-10 text-white py-3">
        <img
          src={iconUrl(icon)}
          alt="weather icon"
          className="w-28 animate__animated animate__bounce animate__infinite"
        />
        <p className="text-6xl mx-auto ">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureHigh className="mr-2" />
            Feels Like:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity className="text-xl mr-2" />
            Humidity:
            <span className="font-medium ml-1">
              {" "}
              {`${humidity.toFixed()}%`}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FaWind className="mr-2" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
      <div className=" flex justify-around items-center text-white text-sm mt-4 p-4">
        <BsSunFill className="text-lg" />
        <p className="font-light">
          Rise:
          <span className="font-medium ml-1">
            {formatTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <BsMoonFill />
        <p className="font-light">
          Set:
          <span className="font-medium ml-1">
            {" "}
            {formatTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p> <BiUpArrowAlt className="text-xl" />
        <p className="font-light">
          High:
          <span className="font-medium ml-1"> {`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p> <BiDownArrowAlt className="text-xl" />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1"> {`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TempDets;
