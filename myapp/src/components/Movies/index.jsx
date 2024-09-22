import React, { useEffect, useState } from "react";
import axios from "axios";

const Movie = () => {
  const [city, setCity] = useState("");
  const [currentData, setCurrentData] = useState({});
  const [cityData, setCityData] = useState({});
  const getMovies = async () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: city, days: "3" },
      headers: {
        "x-rapidapi-key": "subscribe for key",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data, "weather report");
      setCityData(response.data.location);
      setCurrentData(response.data.current);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <input placeholder="Type your city name.." />
      <button>Click to check result</button>
    </div>
  );
};

export default Movie;
