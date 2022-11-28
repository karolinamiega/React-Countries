/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Country.css";
import { Link } from "react-router-dom";

function Country(props) {
  const { imageLink, countryName } = props;
  return (
    <div className="CountriesTwo">
      <h2 className="CountryNameTwo">{countryName}</h2>
      <img src={imageLink} className="CountryImageTwo" />
        <Link to={`/Country/${countryName}`} className="More">Learn More</Link>
    </div>
  );
}

export default Country;
