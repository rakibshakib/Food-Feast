import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid, Tooltip } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';

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
          <Box sx={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography gutterBottom component="h6">
              {item?.name}
            </Typography>
            <Box sx={{display: 'flex' , justifyContent: 'start', alignItems: 'center'}}><GradeIcon /> {item?.rating}/5 </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{my:2}}>
              {item?.description.slice(0,50)}
            </Typography>
          </CardContent>
        </Card>
      </Tooltip>
    </Grid>
  );
};

export default ProductCard;
