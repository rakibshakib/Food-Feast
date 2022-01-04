import { useEffect, useState } from "react";

export const usePizza = () => {
  const [pizza, setPizza] = useState([]);
  useEffect(() => {
    fetch(`https://pacific-refuge-96429.herokuapp.com/foods/query?type=pizza`)
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, []);

  return [pizza];
};
