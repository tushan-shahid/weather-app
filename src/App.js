import getFormattedData from "./api/weatherApi";
import "./App.css";
import Forecast from "./components/Forecast";
import LocalTime from "./components/LocalTime";
import SearchInputs from "./components/SearchInputs";
import TempDets from "./components/TempDets";
import TopButtons from "./components/TopButtons";
import { useEffect, useState } from "react";
function App() {
  const [query, setQuery] = useState({ q: "Vancouver" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);
  return (
    <div class="items-center justify-center h-screen m-10 p-2">
      <div className="p-6  bg-gradient-to-br from-cyan-300 to-blue-700  shadow-gray-400 h-full">
        <TopButtons setQuery={setQuery} />
        <SearchInputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <>
            <div className="rounded-lg shadow-lg bg-blue-400 p-4 ">
              <LocalTime weather={weather} />
              <TempDets weather={weather} />
            </div>
            <Forecast title="hourly weather" items={weather.hourly} />
            <Forecast title="daily weather" items={weather.daily} />
          </>
        )}
      </div>
    </div>
  );
}
export default App;
