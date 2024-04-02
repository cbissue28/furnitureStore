import { Box, Typography } from '@mui/material'
import React from 'react'
import { Button } from './Button'
import Link from 'next/link';

const Hero = () => {
  return (
   <Box
   sx={{
    display: "flex",
    flexDirection: "column",
    height: "40vh",
    width: "30vw",
    justifyContent: "center"
   }}>
    <Typography
    variant="h3"
    sx={{
        textTransform: "uppercase",
        fontSize: "1.5rem",
        letterSpacing: "0.5rem",
        color: "Black"
    }}>
        New Product is here
    </Typography>
    <Typography
    variant="h1"
    sx={{ fontWeight: 600, 
    fontSize: "4.5rem",
    marginBottom: "1rem"}}>
        Shibuya Couch
    </Typography>
    <Typography variant="body1" sx={{ color: "Black", 
    fontSize: "1.2rem",
    marginBottom: "3rem"}}>
        The Shibuya Couch is now available to order and elevate your
        living space.
    </Typography>
    <Button variant="contained" color="#c97b53">
     <Link href="/shibuya-couch">See Product</Link>
    </Button>
   </Box>
  );
};

export default Hero