import { Box, Button, Container, Typography } from "@mui/material";
import Wave from "./Wave";
import HeroImage from "../assets/hero.png";

const HeroSection = () => {
  const customStyle = {
    padding: "60px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    minHeight: "60vh",
    flexWrap: "wrap",
  };

  return (
    <Container>
      <Box sx={customStyle}>
        <Wave />
        <Box>
          <Typography sx={{ margin: "10px 0px" }} variant="h3">
            Shop Anything Anytime..
          </Typography>
          <Typography sx={{ margin: "10px 0px" }} variant="h6">
            You Can Shop Anything From Anywhere 24/7
          </Typography>
          <Button
            sx={{ margin: "10px 0px" }}
            variant="outlined"
            color="primary"
          >
            Shop Now
          </Button>
        </Box>
        <Box>
          <img style={{ height: "350px" }} src={HeroImage} />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
