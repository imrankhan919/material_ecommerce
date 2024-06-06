import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import CartContext from "../providers/cart/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          <Link to={"/"}>Material Store.</Link>
        </Typography>
        <Link to={"/cart"}>
          <Badge badgeContent={cartItems.length} color="error">
            <Button variant="contained" size="small" color="success">
              CART <ShoppingCartIcon />
            </Button>
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
