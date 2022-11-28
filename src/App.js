/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import AllCountries from "./Components/AllCountries/AllCountries";
import SearchForACountry from "./Components/SearchForACountry/SearchForACountry";
import CountryDescription from "./Components/CountryDescription/CountryDescription";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/SearchForACountry" element={<SearchForACountry />} />
        <Route path="/Country/:name" element={<CountryDescription/>} />
      </Routes>
    </div>
  );
}

export default App;
