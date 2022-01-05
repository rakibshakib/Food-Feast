import {  useState } from "react";
const axios = require('axios');
 
export const usePizza = () => {
  const [pizza, setPizza] = useState([]);
  // Make a request for a user with a given ID
  axios.get('https://pacific-refuge-96429.herokuapp.com/foods/query?type=pizza')
  .then(function (response) {
    setPizza(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  // useEffect(() => {
  //   fetch(`https://pacific-refuge-96429.herokuapp.com/foods/query?type=pizza`)
  //     .then((res) => res.json())
  //     .then((data) => setPizza(data));
  // }, []);

  return [pizza];
};
