import { Box, Typography, Button as MUIButton } from '@mui/material'
import React from 'react'
import { Button } from './Button'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../store/hook'
import { clearCart } from '../store/cartSlice'
import Link from 'next/link'

const Cart = () => {
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
  return (
    // absolute does not move stretch the nav out
    // first box greys screen out
    <Box
    sx={{
        position: "absolute",
        height: "100vh", 
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 120,
    }}
    >
    <Box
    sx={{
        position: "absolute",
        right: 290,
        top: 3,
        minHeight: "20vh",
        width: "35vh",
        backgroundColor: "white",
        color: "black",
        padding: "1.5rem",
        textTransform: "uppercase",
        display: "flex",
        flexDirection: "column"
    }}
    >
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Cart</Typography>
        <MUIButton onClick={() => dispatch(clearCart())}>Remove All</MUIButton>
    </Box>
    {cart.map((product) => { 
    return (
       <Box 
       key={product.id} 
       sx={{ 
        display: "flex", 
        marginLeft: "1rem 0", 
        justifyContent: 'space-between' }}>
        <Box sx={{ display: "flex" }}>
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
     )
     })}
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ marginTop: "0.5rem" }}>Total</Typography>
        <Typography>£££</Typography>
    </Box>
    <Button 
    color="#d97d45" 
    variant="contained" 
    sx={{ width: "100%", marginTop: "1rem" }}>
        <Link href="/checkout">Checkout</Link>
    </Button>
    </Box>
    </Box>
  )
}

export default Cart