import { Box, Container, Typography, Button as MuiButton } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './Button'
import { useAppDispatch } from '../store/hook'
import { addToCart } from '../store/cartSlice'

interface Props {
    product: any;
}

const ProductDetails = ({ product }: Props) => { 
    // State to manage the count of a product.
    const [count, setCount] = useState(1);

    const dispatch = useAppDispatch();

  return (
  <Container
  sx={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center" }}>

        <Image
        src={product.image?.desktop.replace(".", "") || ""}
        width={550}
        height={500}
        alt="item" />
        
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            height: "75vh",
            width: "35vw",
            justifyContent: "center",
            marginLeft: "8rem" }}> 
            
            <Typography
            variant="h1"
            sx={{
                fontWeight: 600,
                marginBottom: "2rem",
                textTransform: "uppercase",
                fontSize: "4.5rem",
                textAlign: "center" }}>
                    {product.name}
            </Typography>
            
            <Typography
            variant="body1"
            sx={{ 
                color: "#727272", 
                fontSize: "1.25rem", 
                marginBottom: "3rem" }}>
                    {product.description}
            </Typography>
            
            <Typography 
            variant="h5" 
            sx={{ 
                marginBottom: "1.5rem", 
                fontWeight: 700 }}>
                    £{product.price}
            </Typography>
            
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                sx={{ 
                    backgroundColor: "#f1f1f1",
                    padding: "0.75rem",
                    marginRight: "0.5rem" }}>
                        
                        {/* The button prevents user from selecting a count lower than 1 */}
                        <MuiButton onClick={() => {
                            if (count > 1) {
                                setCount(count - 1);}
                                }}> 
                                - 
                        </MuiButton>
                        {count}
                        <MuiButton onClick={() => setCount(count + 1)}>
                            +
                        </MuiButton>
                </Box>
                
                {/* The button adds the product and its data to the cart */}
                <Button
                variant="contained"
                color="#d97d45"
                onClick={() => {
                dispatch( 
                addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image.desktop.replace(".", ""),
                count: count,
                })
                );
            }}>
            Add to Cart
              </Button>
            </Box>  
        </Box>
  </Container>
  )
}

export default ProductDetails