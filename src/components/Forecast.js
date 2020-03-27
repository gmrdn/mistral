import React, { useState, useEffect } from "react";
import axios from "axios";
import Demain from "./Demain.js";
import Prochain from "./Prochain.js";

const API =
  "https://api.openweathermap.org/data/2.5/forecast?zip=13100,fr&APPID=f4e38397f380af9bab3b4dc73fab548a";

const Forecast = () => {
  const [data, setData] = useState({ forecast: [], isFetching: true });

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setData({ forecast: data.forecast, isFetching: true });
        const response = await axios.get(API);
        setData({ forecast: response.data, isFetching: false });
      } catch (e) {
        console.log(e);
        setData({ forecast: data.forecast, isFetching: false });
      }
    };
    fetchForecast();
  }, []);

  return (
    <div className="bg-light p-4">
      <div className="container">
        <div className="row">
          <div className="col py-md-3 mb-3">
            <Demain data={data.forecast} isFetching={data.isFetching} />
          </div>
          <div className="col py-md-3 mb-3">
            <Prochain data={data.forecast} isFetching={data.isFetching} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
