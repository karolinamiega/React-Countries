/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./SearchForACountry.css";
import SearchIcon from "../Images/search.svg";
import { useDebounce } from "../../Hooks/DebounceHook";
import axios from "axios";
import Country from "../Country/Country";
import { Link } from "react-router-dom";

function SearchForACountry() {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const prepareSearchQuery = (query) => {
    const url = `https://restcountries.com/v3.1/name/${query}`;

    return encodeURI(url);
  };

  const searchCountry = async () => {
    if (!input || !input.trim() === "") return;

    const URL = prepareSearchQuery(input);

    const response = await axios.get(URL).catch((err) => {
      console.log("Error:", err);
    });

    if (response) {
      setCountries(response.data);
    }
  };

  useDebounce(input, 500, searchCountry);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for a country"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
      <>
        {countries.map((country) => (
            <div>
          <Country
            imageLink={country.flags.png}
            countryName={country.name.common}
          />
          </div>
        ))}
      </>
    </div>
  );
}

export default SearchForACountry;
