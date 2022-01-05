import { useState } from "react";
const axios = require('axios');


export const useFoodData = () => {
  const [foods, setFoods] = useState([]);
  axios.get('https://pacific-refuge-96429.herokuapp.com/foods')
  .then(function (response) {
    setFoods(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  // useEffect(() => {
  //   fetch(`https://pacific-refuge-96429.herokuapp.com/foods`)
  //     .then((res) => res.json())
  //     .then((data) => setFoods(data));
  // }, []);

  return [foods];
};

