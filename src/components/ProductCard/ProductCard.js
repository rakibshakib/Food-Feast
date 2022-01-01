import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Rating, Tooltip } from "@mui/material";

const ProductCard = ({item}) => {

  const orderFood = () => {
    console.log("this food is orders");
  };
  return (
    <Grid item xs={12} md={4} lg={3} onClick={orderFood} className="food-card">
      <Tooltip title="Want to order this Food? 🍕 Just Click 😁" placement="top-end">
        <Card sx={{ maxWidth: 310 }}>
          <CardMedia
            component="img"
            height="140"
            image={item?.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="h6">
              {item?.name}
            </Typography>
            <Rating name="read-only" value={item?.rating} readOnly />
            <Typography variant="body2" color="text.secondary">
              {item?.description}
            </Typography>
          </CardContent>
        </Card>
      </Tooltip>
    </Grid>
  );
};

export default ProductCard;
