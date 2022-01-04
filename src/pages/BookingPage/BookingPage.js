import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import {
  Box,
  Button,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./BookingPage.css";
import GetClientOrder from "./GetClientOrder/GetClientOrder";
import Header from "../../components/Navbar/Header";

const BookingPage = () => {
  const paramsId = useParams();
  const [singleFood, setSingleFood] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [isDelivery, setisDelivery] = useState(false);
  const [isTakeOut, setisTakeOut] = useState(false);

  useEffect(() => {
    const url = `https://pacific-refuge-96429.herokuapp.com/foods/${paramsId.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleFood(data));
  }, [paramsId]);

  const dicrementHandler = () => {
    if (orderQuantity > 1) {
      setOrderQuantity(orderQuantity - 1);
    }
  };
  const incrimentHandler = () => {
    setOrderQuantity(orderQuantity + 1);
  };

  return (
    <div>
      <Header />
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ my: 5 }}
        >
          <Grid item xs={12} md={6} sx={{ my: 3 }}>
            <Tooltip placement="top-end" title="You Can Increse Your Food Quantity By Clicking Plus Button">
              <div className="order-container">
                <div className="order-container-img">
                  <img src={singleFood.url} alt={singleFood.name} />
                </div>
                <div className="order-food-details">
                  <h4 className="order-food-title">{singleFood.name}</h4>
                  <h6 className="order-food-type">{singleFood.type}</h6>
                  <h5 className="order-food-price">
                    $ {singleFood.price} *per quantity
                  </h5>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: 2,
                      borderColor: "rgba(149, 157, 165, 0.2)",
                      borderRadius: 2,
                    }}
                  >
                    <button onClick={dicrementHandler} className="decrement">
                      <RemoveIcon />
                    </button>

                    <input
                      className="order-input"
                      type="number"
                      value={orderQuantity}
                    />

                    <button onClick={incrimentHandler} className="incriment">
                      {" "}
                      <AddIcon />{" "}
                    </button>
                  </Box>
                  <Typography sx={{ my: 2 }} variant="h6">
                    Your Total Price: ${" "}
                    {(singleFood?.price * orderQuantity).toFixed(2)}
                  </Typography>
                </div>
              </div>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={6} sx={{ my: 3 }}>
            {!isDelivery && !isTakeOut && (
              <Box className="payment-container">
                <Typography variant="h6">
                  Dear customer, Which Way You want to receive the food in your
                  orders? 😀
                </Typography>

                <Button
                  sx={{ width: "100%", my: 2 }}
                  onClick={() => setisDelivery(true)}
                  variant="contained"
                >
                  Delivery
                </Button>
                <br />
                <Button
                  sx={{ width: "100%", my: 2 }}
                  onClick={() => setisTakeOut(true)}
                  variant="contained"
                >
                  Takeout
                </Button>
              </Box>
            )}
            {isDelivery && (
              <GetClientOrder
                singleFood={singleFood}
                orderQuantity={orderQuantity}
              />
            )}
            {isTakeOut && (
              <Box className="payment-container">
                <Typography variant="h6">
                  Please Come to our cafe Today AfterNoon At 5PM 😁
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default BookingPage;
