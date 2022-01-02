import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid, Tooltip } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const orderFood = (id) => {
        navigate(`/booking-food/${id}`)
  };
  return (
    <Grid
      item
      xs={12}
      md={4}
      lg={3}
      onClick={() => orderFood(item._id)}
      className="food-card"
    >
      <Tooltip
        title="Want to order this Food? 🍕 Just Click 😁"
        placement="top-end"
      >
        <Card sx={{ maxWidth: 310, height: 330 }}>
          <CardMedia
            component="img"
            height="200"
            image={item?.url}
            alt="green iguana"
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography component="h5">{item?.name}</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  fontSize: 14,
                }}
              >
                <GradeIcon sx={{ fontSize: 16 }} /> &nbsp;{item?.rating}/5
              </Box>
            </Box>
            <Typography
              sx={{ fontSize: 15, my: 4, color: "red" }}
              component="h5"
              color="text.secondary"
            >
              Price: &nbsp;${item?.price} &nbsp; - &nbsp;{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                {" "}
                ${(item?.price + 1.2).toFixed(2)}
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Tooltip>
    </Grid>
  );
};

export default ProductCard;
