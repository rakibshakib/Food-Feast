import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Rating, Tooltip } from "@mui/material";
const ProductCard = () => {
    
  const orderFood = () => {
    console.log("this food is orders");
  };
  return (
    <Grid item xs={12} md={4} lg={3} onClick={orderFood}>
      <Tooltip title="Order This Food" placement="top-end">
        <Card sx={{ maxWidth: 310 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="h6">
              Food Name
            </Typography>
            <Rating name="read-only" value="3" readOnly />
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000
            </Typography>
          </CardContent>
        </Card>
      </Tooltip>
    </Grid>
  );
};

export default ProductCard;
