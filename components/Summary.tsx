import { Box, Typography } from '@mui/material'
import React from 'react'
import { Button } from './Button'
import { useAppDispatch, useAppSelector } from '../store/hook';
import Image from 'next/image';
import { removeFromCart } from '../store/cartSlice';


const Summary = () => {
const { cart } = useAppSelector((state) => state.cart);
const dispatch = useAppDispatch();
const total = cart.reduce((acc, product) => acc + (product.price * product.count), 0);
const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId))}; // Dispatch action to remove the product from the cart

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "25%" }}> 
    <Box sx={{ 
        backgroundColor: "white",
        padding: "2rem",
        margin: "4rem 0rem",
        marginLeft: "2rem",
        width: "100%" }}>
        <Typography 
        variant="h1"
        sx={{
            fontSize: "2rem",
            textTransform: "uppercase",
            fontWeight: 800, 
            letterSpacing: 1.5,
            marginBottom: "2rem"
        }}>
            Summary
            </Typography>
            <Box sx={{ 
                display: "flex", 
                justifyContent: "space-between",
                marginBottom: "0.5rem" }}>
            <Typography 
            sx={{ 
                color: "#808080", 
                textTransform: "uppercase", 
                fontWeight: 600 }}>
                Total
                </Typography>
            <Typography 
            sx={{
            textTransform: "uppercase", 
            fontWeight: 600 }}>
                 £{total}
            </Typography>
            </Box>
            <Box sx={{ 
                display: "flex", 
                justifyContent: "space-between",
                marginBottom: "1.5rem" }}>
            <Typography 
            sx={{ 
                color: "#808080", 
                textTransform: "uppercase", 
                fontWeight: 600 }}>
                Shipping
                </Typography>
            <Typography 
            sx={{
            textTransform: "uppercase", 
            fontWeight: 600 }}>
                Free
            </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between"}}>
            <Typography 
            sx={{ 
                color: "#808080", 
                textTransform: "uppercase", 
                fontWeight: 600 }}>
                Total Fee
                </Typography>
            <Typography 
            sx={{
            textTransform: "uppercase", 
            fontWeight: 600 }}>
                £{total}
            </Typography>
            </Box>
            <Button 
            variant="contained" 
            color="#d97d45"
            sx={{
                marginTop: "1rem",
                width: "100%"
             }}>Confirm and Pay</Button>
             </Box>
         {cart.map((product) => { 
    return (
        <Box sx={{ 
            backgroundColor: "white",
            padding: "2rem",
            marginTop: "-3.5rem",
            marginLeft: "2rem",
            width: "100%",
            height: "10%" }}>
       <Box 
       key={product.id} 
       sx={{ 
        display: "flex", 
        marginLeft: "1rem 0", 
        marginBottom: "0.3rem",
        justifyContent: 'space-between' }}>
        <Box sx={{ display: "flex" }}>
        <Image 
            src="/assets/shared/desktop/icon-cancel.svg" 
            alt="apple pay icon"
            width={15}
            height={10}
            style={{ 
                marginTop: "1.5rem",
                marginRight: "0.5rem" }}
            onClick={() => handleRemoveFromCart(product.id)}/>
         <Image
           src={product.image}
           width={50}
           height={50}
           alt="item"
          />
          <Box sx={{ 
          display: "flex", 
          flexDirection: "column",
          marginLeft: "1rem", 
          }}>
           <Typography variant="body1">{product.name}</Typography>
           <Typography variant="body2">£{product.price}</Typography>
          </Box>
         </Box>
         <Typography variant="body1" sx={{ fontWeight: 600, color: "gray" }}>{product.count}</Typography>
         </Box>
         </Box>    
     )
     })}    
             
            </Box>

  )
}

export default Summary
