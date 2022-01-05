import React from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/ProductCard";
import {
  Box,
  Button,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import { usePizza } from "../../Hooks/usePizzaData";
import { useBerger } from "../../Hooks/useBerger";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Fade from "react-reveal/Fade";
import { useRamen } from "../../Hooks/useRamen";

const HomePageProducts = () => {
  // const [data] = useFoodData();
  const [pizza] = usePizza();
  const [burger] = useBerger();
  const [ramen] = useRamen();
  return (
    <Container sx={{ my: 5, py: 4 }}>
      <Fade bottom>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Our Pizza Item
          </Typography>
          <Link className="router-link" to="/explore">
            <Button size="small" variant="outlined">
              Explore More <ArrowRightIcon />
            </Button>
          </Link>
        </Box>
        <hr />
      </Fade>
      {pizza.length === 0 && (
        <Box sx={{ width: "100%", my: 5 }}>
          <LinearProgress />
        </Box>
      )}
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {pizza.slice(0, 8).map((item) => (

          <ProductCard key={item._id} item={item} />
        ))}
      </Grid>
      <Fade bottom>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Our Berger Item
          </Typography>
          <Link className="router-link" to="/explore">
            <Button size="small" variant="outlined">
              Explore More <ArrowRightIcon />
            </Button>
          </Link>
        </Box>
        <hr />
      </Fade>

      {burger.length === 0 && (
        <Box sx={{ width: "100%", my: 5 }}>
          <LinearProgress />
        </Box>
      )}
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {burger.slice(0, 8).map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </Grid>
      <Fade bottom>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Our Best Ramen Items
          </Typography>
          <Link className="router-link" to="/explore">
            <Button size="small" variant="outlined">
              Explore More <ArrowRightIcon />
            </Button>
          </Link>
        </Box>
        <hr />
      </Fade>
      {ramen.length === 0 && (
        <Box sx={{ width: "100%", my: 5 }}>
          <LinearProgress />
        </Box>
      )}
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {ramen.slice(0, 8).map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </Grid>
      {/* <SliderProduct />  */}
    </Container>
  );
};

export default HomePageProducts;
