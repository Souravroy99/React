import { useState } from "react";
import "./App.css";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "USA",
    value: "NY",
    cities: ["Albany", "New York City"],
  },
  {
    name: "Denmark",
    value: "DN",
    cities: ["Roskilde", "Aarhus"],
  },
];

function App() {
  const [country, setCountry] = useState(0);
  const [city, setCity] = useState(0);

  return (
    <div className="App">
      {/* 1st Dropdown */}
      <select
        onClick={(e) => {
          setCountry(e.target.value);
        }}
      >
        {countries.map((countryVal, index) => {
          return (
            <option value={index} key={index}>
              {countryVal.name}
            </option>
          );
        })}
      </select>

      {/* 2nd Dropdown */}
      <select onClick={(e) => setCity(e.target.value)}>
        {countries[country].cities.map((city, idx) => {
          return (
            <option key={idx}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;
