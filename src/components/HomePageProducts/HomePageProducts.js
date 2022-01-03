import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Typography } from "@mui/material";
import { usePizza } from "../../Hooks/usePizzaData";
import { useBerger } from "../../Hooks/useBerger";

const HomePageProducts = () => {
  // const [data] = useFoodData();
  const [pizza] = usePizza();
  const [burger] = useBerger();
  return (
    <Container sx={{ my: 5, py: 4 }}>
      <Typography variant="h5" sx={{ my: 3 }}>
        Our Pizza Item
        
      </Typography>
      <hr />
      <Grid container spacing={5}>
        {pizza.slice(0, 8).map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </Grid>

      <Typography variant="h5" sx={{ my: 3 }}>
        Our Berger Item
      </Typography>
      <hr />
      <Grid container spacing={5}>
        {burger.slice(0, 4).map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default HomePageProducts;
