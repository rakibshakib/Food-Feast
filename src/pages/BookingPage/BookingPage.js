import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Box, Button, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./BookingPage.css";

const BookingPage = () => {
  const paramsId = useParams();
  const [singleFood, setSingleFood] = useState([]);
  console.log(singleFood);
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
        <h4>You are Ordering {singleFood.name || "nothing"} </h4>
        <Box>
          <div className="order-container">
            <div className="order-container-img">
              <img src={singleFood.url} alt={singleFood.name} />
            </div>
            <div className="order-food-details">

              <h4 className="order-food-title">{singleFood.name}</h4>
              <h6 className="order-food-type">{singleFood.type}</h6>
              <h5 className="order-food-price">$ {singleFood.price} *per quantity</h5>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: 1,
                  width: "230px"
                }}
              >
                <Button className='decrement' size="small" >
                  <RemoveIcon />
                </Button>

                <input className="order-input" type="number" value={`5`} />
                <Button className='incriment' size="small" >
                  <AddIcon />
                </Button>
              </Box>
                <Typography sx={{my: 2}} variant="h6">
                  Your Total Price: {0}
                </Typography>
                <Button variant="contained" color="success">Place For Order ?</Button>
            </div>
          </div>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default BookingPage;
