import { Box, Container, Typography, Button as MUIButton } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './Button'
import { useAppDispatch } from '../store/hook'
import { addToCart } from '../store/cartSlice'

interface Props {
    product: any;
}

const ProductPage = ({ product }: Props) => { 
    const [count, setCount] = useState(0);
    const dispatch = useAppDispatch();

  return (
    <Container
    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
        <Image
        src={product.image?.desktop.replace(".", "") || ""}
        width={500}
        height={500}
        alt="item"
        />
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            height: "75vh",
            width: "35vw",
            justifyContent: "center",
            marginLeft: "8rem"  
        }}> 
        <Typography
        variant="h1"
        sx={{
            fontWeight: 600,
            marginBottom: "2rem",
            textTransform: "uppercase",
            fontSize: "4.5rem",
            textAlign: "center"
        }}>
            {product.name}
        </Typography>
        <Typography
        variant="body1"
        sx={{ color: "#727272", fontSizE: "1.25rem", marginBottom: "3rem" }}
        >
         {product.description}
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "1.5rem", fontWeight: 700 }}
        >£{product.price}</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
         sx={{
        backgroundColor: "#f1f1f1",
        padding: "0.75rem",
        marginRight: "0.5rem"
        }}
        >
        <MUIButton onClick={() => setCount(count - 1)}>-</MUIButton>
        {count}
        <MUIButton onClick={() => setCount(count + 1)}>+</MUIButton>
         </Box>
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
            }}          
            >
            Add to Cart
            </Button>
        </Box>  
        </Box>
    </Container>
  )
}

export default ProductPage