import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const paramsId = useParams();
  const [singleFood, setSingleFood] = useState([]);

  useEffect(() => {
    const url = `https://pacific-refuge-96429.herokuapp.com/foods/${paramsId.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleFood(data));
  }, [paramsId]);

  return (
    <div>
      <NavBar />
      <Container>
        <h2>this is a order booking page {singleFood.name || "nothing"} </h2>
      </Container>
      <Footer />
    </div>
  );
};

export default BookingPage;
