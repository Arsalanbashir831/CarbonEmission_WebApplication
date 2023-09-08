import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = () => {
  return (
    <div className="w-[100%]">

   
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="50"
        image="https://via.placeholder.com/150" // Replace with your product image URL
        alt="Product Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Product description goes here. You can provide more details about the product.
        </Typography>
      
      </CardContent>
      
    </Card>
    </div>
  );
};

export default ProductCard;
