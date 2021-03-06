import React, { useEffect, useState } from "react";

const Countries = () => {
  // useState function will call here
  const [countries, setCountries] = useState([]);

  // useEffect function will call here
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default Countries;
