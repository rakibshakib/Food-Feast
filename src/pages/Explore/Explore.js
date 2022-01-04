import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Navbar/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useFoodData } from "../../Hooks/useFoodData";

const Explore = () => {
    const [food] = useFoodData()
  return (
    <div>
      <Header />
      <Container>
        <Typography variant="h6" sx={{fontWeight: 700, textAlign: "center", mt: 3}}>Lets Explore All Our Food Items</Typography>
        <hr />
        <Grid container spacing={5} sx={{my: 5}}>
          {food.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Explore;
