import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

const PaymentCard = ({ cartItems }) => {
  const total = cartItems.reduce((p, c) => p + c.price, 0);

  return (
    <Grid item sm={12} md={4} lg={4}>
      <Card sx={{ padding: "10px" }}>
        <Typography variant="h6" gutterBottom>
          Your Total
        </Typography>
        <Typography variant="h6" gutterBottom>
          Total Items : {cartItems.length}
        </Typography>
        <Typography variant="h3" gutterBottom>
          ${total}
        </Typography>
        <Button variant="contained" color="success">
          Pay Now
        </Button>
      </Card>
    </Grid>
  );
};

export default PaymentCard;
