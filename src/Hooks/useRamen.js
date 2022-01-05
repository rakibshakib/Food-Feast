import {  useState } from "react";
const axios = require('axios'); 

export const useRamen = () => {
  const [ramen, setRamen] = useState([]);
  axios.get('https://pacific-refuge-96429.herokuapp.com/foods/query?type=ramen')
  .then(function (response) {
    setRamen(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  // useEffect(() => {
  //   fetch(`https://pacific-refuge-96429.herokuapp.com/foods/query?type=ramen`)
  //     .then((res) => res.json())
  //     .then((data) => setRamen(data));
  // }, []);

  return [ramen];
};
