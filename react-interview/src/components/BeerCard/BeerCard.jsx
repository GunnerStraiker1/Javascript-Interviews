import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import ExampleData from "../../Beer-example.json";
import "./BeerCard.css";
import React from "react";

export const BeerCard = () => {
  return (
    <Card className="beerCard">
      <div className="beerCardImgContainer">
        <CardMedia
          component="img"
          image={ExampleData.image_url}
          alt="green iguana"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
