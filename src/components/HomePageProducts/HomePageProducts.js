import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/ProductCard";
import { Container } from "@mui/material";


const HomePageProducts = () => {
  return (
    <Container sx={{my: 5, py: 4}}>
      <Grid container spacing={5}>
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
        <ProductCard /> 
      </Grid>
    </Container>
  );
};

export default HomePageProducts;
