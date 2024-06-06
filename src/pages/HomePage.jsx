import { Container, LinearProgress, Typography } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import { useContext, useEffect } from "react";
import ProductContext from "../providers/products/ProductContext";

const HomePage = () => {
  const { products, dispatch } = useContext(ProductContext);

  useEffect(() => {
    dispatch({
      type: "RESET_PRODUCT_STATE",
    });
  }, []);

  if (products.length === 0) {
    <Container sx={{ padding: "80px 0px" }}>
      <LinearProgress />
    </Container>;
  }

  return (
    <>
      <HeroSection />

      <Typography sx={{ margin: "40px 0px" }} variant="h4" align="center">
        Products
      </Typography>

      <Products />
    </>
  );
};

export default HomePage;
