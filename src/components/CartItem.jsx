import { Box, Button, Card, Typography } from "@mui/material";
import { useContext } from "react";
import CartContext from "../providers/cart/CartContext";

const CartItem = ({ cartItem }) => {
  const { cartDispatch } = useContext(CartContext);

  const handleRemove = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  return (
    <Card
      sx={{
        padding: "10px",
        margin: "20px 0px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        style={{ height: "220px", margin: "0px 20px" }}
        src={cartItem.image}
      />
      <Box>
        <Typography variant="h6">{cartItem.title}</Typography>
        <Typography variant="h6">{cartItem.price}</Typography>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleRemove(cartItem.id)}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
