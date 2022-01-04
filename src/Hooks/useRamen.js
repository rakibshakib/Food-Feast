import { useEffect, useState } from "react";

export const useRamen = () => {
  const [ramen, setRamen] = useState([]);
  useEffect(() => {
    fetch(`https://pacific-refuge-96429.herokuapp.com/foods/query?type=ramen`)
      .then((res) => res.json())
      .then((data) => setRamen(data));
  }, []);

  return [ramen];
};
