import { useEffect, useState } from "react";

export const useFoodData = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://pacific-refuge-96429.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return [foods];
};
