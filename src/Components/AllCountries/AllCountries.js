/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './AllCountries.css';

function AllCountries() {
    const url = 'https://restcountries.com/v3.1/all';
    const [countries, setCountries] = useState([]);
    const [visible, setVisible] = useState(6);

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 6);
    }
    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
                setCountries(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const countryMap = countries.slice(0, visible).map((country) => {
      return(
      <div className='Countries'>
        <h2 key={country.name.common} className="CountryName">{country.name.common}</h2>
        <img key={country.flags.png} src={country.flags.png} alt="Country-Flag"></img>
      </div>
   ); });
   
  return (
    
    <div className='AllCountries'>
      <h1>World Country List</h1>
        {countryMap}
        <div className='Buttons'>
        <button onClick={showMoreItems} className="LoadMore">Load More</button>
        </div>
        
    </div>
  )
}

export default AllCountries
