import { useEffect, useState } from "react";

export const useBerger = () => {
  const [burger, setBurger] = useState([]);
  useEffect(() => {
    fetch(`https://pacific-refuge-96429.herokuapp.com/foods/query?type=burger`)
      .then((res) => res.json())
      .then((data) => setBurger(data));
  }, []);

  return [burger];
};
