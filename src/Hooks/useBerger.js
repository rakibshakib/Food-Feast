import {  useState } from "react";
const axios = require('axios');

export const useBerger = () => {
  const [burger, setBurger] = useState([]);
  

// Make a request for a user with a given ID
  axios.get('https://pacific-refuge-96429.herokuapp.com/foods/query?type=burger')
  .then(function (response) {
    setBurger(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  return [burger];
};
