import { DateTime } from "luxon";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_WEATHER_API_URL;

const getWeatherData = (type, searchParams) => {
  const url = new URL(BASE_URL + "/" + type);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};
const formatData = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    speed,
    icon,
  };
};
const formatForecast = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });
  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { daily, hourly, timezone };
};

const getFormattedData = async (searchParams) => {
  const formattedData = await getWeatherData("weather", searchParams).then(
    formatData
  );

  const { lat, lon } = formattedData;
  const formattedForecastData = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecast);
  return { ...formattedData, ...formattedForecastData };
};

const formatTime = (secs, zone, format = "ccc,dd LLL yyyy' | 'hh:mm a") =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedData;

export { formatTime, iconUrl };
