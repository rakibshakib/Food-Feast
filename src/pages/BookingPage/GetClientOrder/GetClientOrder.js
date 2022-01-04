import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const GetClientOrder = ({ singleFood, orderQuantity }) => {
  const { user } = useAuth();
  const initialOrder = {
    CustomerName: user?.displayName,
    email: user?.email,
    phone: "",
  };
  const [orderInfo, setOderInfo] = useState(initialOrder);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOderInfo(newInfo);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    // collected order data
    const order = {
      ...orderInfo,
      orderItem: singleFood?.name,
      orderItemId: singleFood?._id,
      orderURL: singleFood?.url,
      status: "pending",
      price: singleFood?.price,
      totalPrice: singleFood?.price * orderQuantity.toFixed(2),
      orderQuantity: orderQuantity,
    };
    console.log(order);
    fetch("https://pacific-refuge-96429.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderSuccess(true);
        }
      });
  };
  return (
    <Box sx={{ width: "100", py: 5, mx: 5 }}>
      <Typography variant="h6">
        Please Fill Up Your Information to Delivery
      </Typography>
      <form action="" onSubmit={handleOrderSubmit}>
        <TextField
          label="Your Name"
          id="outlined-size-small"
          name="CustomerName"
          onBlur={handleOnBlur}
          defaultValue={user?.displayName}
          size="small"
          sx={{ width: "80%", my: 2 }}
        />

        <TextField
          label="Your Email"
          id="outlined-size-small"
          name="email"
          onBlur={handleOnBlur}
          defaultValue={user?.email}
          size="small"
          sx={{ width: "80%", my: 2 }}
        />
        <TextField
          label="Your Phone Number"
          id="outlined-size-small"
          name="phone"
          onBlur={handleOnBlur}
          size="small"
          sx={{ width: "80%", my: 2 }}
        />
        <TextField
          label="Your Adress"
          id="outlined-size-small"
          name="adress"
          onBlur={handleOnBlur}
          size="small"
          sx={{ width: "80%", my: 2 }}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "80%" }}
        >
          Confirm Delevery
        </Button>
      </form>
      {orderSuccess && (
        <Alert sx={{ my: 5, width: "80%" }} severity="success">
          Order Success ! It Will take Less Than 30 Minitues to Delivery
        </Alert>
      )}
    </Box>
  );
};

export default GetClientOrder;
