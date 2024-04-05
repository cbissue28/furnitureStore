import { Box, Typography, Button as MuiButton } from '@mui/material';
import React, { useState } from 'react';
import { Button } from './Button';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { clearCart, removeFromCart } from '../store/cartSlice';
import Link from 'next/link';

// Returns the cart when its icon is clicked on in the Nav bar.
const Cart = () => {
    // Retrieve the cart state from the Redux store
    const { cart } = useAppSelector((state) => state.cart);
    
    // Initialize the dispatcher to dispatch actions to the Redux store
    const dispatch = useAppDispatch();

    // Calculate the total price of all items in the cart
    const total = cart.reduce((acc, product) => acc + (product.price * product.count), 0);

    // State to manage whether the cart is currently visible or hidden
    const [showCart, setShowCart] = useState(true); 
    
    // Function to close the cart.
    const handleBackgroundClick = () => {
        setShowCart(false); // When outside of the cart is clicked, showCart will be set to False.
    };
    
    // Function to remove individual items from the cart.
    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId))}; // Dispatch action to remove the product from the cart.

    return (
    <React.Fragment>
        {showCart && (
        <Box
        sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 9999 }}
        onClick={handleBackgroundClick} // Calls function to close cart when clicked.
        >
            <Box
            sx={{
                position: "absolute",
                right: 250,
                top: 92,
                minHeight: "20vh",
                width: "35vh",
                backgroundColor: "white",
                color: "black",
                padding: "1.5rem",
                textTransform: "uppercase",
                display: "flex",
                flexDirection: "column" }}
            onClick={(e) => e.stopPropagation()} // Prevents closing the cart when the actual cart is clicked on.
            >
                <Box 
                sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Cart</Typography>
                    <MuiButton onClick={() => dispatch(clearCart())}>Remove All</MuiButton>
                </Box>
                
                {/* Displays all products in the cart */ }
                {cart.map((product) => {
                    return (
                    <Box
                    key={product.id}
                    sx={{
                        display: "flex",
                        marginLeft: "1rem 0",
                        marginBottom: "0.3rem",
                        justifyContent: 'space-between' }}
                    >
                        
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
                            src={product.image.desktop.replace(".", "")}
                            width={50}
                            height={50}
                            alt="item" />
                            
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "1rem" }}>
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
                        <Typography>£{total}</Typography>
                    </Box>
                    
                    {/* Redirects user to checkout page */ }
                    <Button
                    color="#d97d45"
                    variant="contained"
                    sx={{ 
                        width: "100%", 
                        marginTop: "1rem" }}>
                            <Link href="/checkout">Checkout</Link>
                    </Button>
                    </Box>
                </Box>
            )}
        </React.Fragment>
    );
};

export default Cart;