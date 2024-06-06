import { Box, Container, Grid, LinearProgress } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../providers/products/ProductContext";
import { fetchProducts } from "../providers/products/ProductActions";

const Products = () => {
  const { products, dispatch } = useContext(ProductContext);

  const getProducts = async () => {
    const data = await fetchProducts();
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
