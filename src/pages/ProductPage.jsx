import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  LinearProgress,
  Rating,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../providers/products/ProductContext";
import { fetchProduct } from "../providers/products/ProductActions";
import CartContext from "../providers/cart/CartContext";

const ProductPage = () => {
  const { product, dispatch } = useContext(ProductContext);
  const { cartDispatch } = useContext(CartContext);

  const params = useParams();

  const getProduct = async (id) => {
    const data = await fetchProduct(id);
    dispatch({
      type: "FETCH_PRODUCT",
      payload: data,
    });
  };

  const handleAdd = (productToAdd) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: productToAdd,
    });
  };

  useEffect(() => {
    getProduct(params.id);
  }, []);

  if (!product) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <LinearProgress color="secondary" />
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Card sx={{ padding: "20px", display: "flex" }}>
        <img
          style={{ height: "400px", objectFit: "contain", width: "50%" }}
          src={product?.image}
        />
        <Box sx={{ margin: "0px 20px" }}>
          <Typography variant="h4" gutterBottom>
            {product?.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {product?.description}
          </Typography>
          <Chip
            sx={{ margin: "10px 0px" }}
            label={product.category}
            variant="outlined"
          />
          <Box
            sx={{ display: "flex", alignItems: "center", margin: "20px 0px" }}
          >
            <Typography variant="body2">Rating :</Typography>
            <Rating
              name="Product Rating"
              value={product?.rating.rate}
              readOnly
            />
          </Box>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleAdd(product)}
          >
            Add To Cart
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default ProductPage;
