import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Kelowna",
    },
    {
      id: 2,
      title: "Dhaka",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Vancouver",
    },
    {
      id: 5,
      title: "Toronto",
    },
  ];
  return (
    <div className="flex items-center justify-around py-1  rounded-lg shadow-lg bg-blue-400 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-md font-medium transition ease-out hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
