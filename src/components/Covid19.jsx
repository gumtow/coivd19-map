import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Legend from "./Legend";
import CovidMap from "./CovidMap";
import LoadCountriesTask from "../tasks/LoadCountries";
import legendItems from "../entities/LegenItems";

const Covid19 = () => {
  const [countries, setCountries] = useState([]);
  const legendItemsInReverse = [...legendItems].reverse();

  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap countries={countries} />
          <Legend legendItems={legendItemsInReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19;
