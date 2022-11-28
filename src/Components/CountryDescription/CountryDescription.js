/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CountryDescription.css";

function CountryDescription() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };
    fetchCountryData();
  }, []);
  return (
      <div className="Country">
       {country.map((country) => (
            <div>
                <h2>Common name: {country.name.common}</h2>
                <h2>Official name: {country.name.official}</h2>
                <p>Capital: {country.capital}</p>
                <p>Region: {country.region}</p>
                <p>Subregion: {country.subregion}</p>
                <p>Population: {country.population}</p>
                <p>Timezone: {country.timezones}</p>
                <img src={country.coatOfArms.png}></img>
                </div>
        ))}
      </div>
  );
}
export default CountryDescription;
