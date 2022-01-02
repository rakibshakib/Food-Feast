import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/ProductCard";
import { Container } from "@mui/material";
import { useFoodData } from "../../Hooks/useFoodData";

const HomePageProducts = () => {
  const [data] = useFoodData();
  return (
    <Container sx={{ my: 5, py: 4 }}>
      <Grid container spacing={5}>
        {data.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
        
      </Grid>
    </Container>
  );
};

export default HomePageProducts;
