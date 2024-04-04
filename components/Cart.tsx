import { Box, Typography, Button as MuiButton } from '@mui/material';
import React, { useState } from 'react';
import { Button } from './Button';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { clearCart, removeFromCart } from '../store/cartSlice';
import Link from 'next/link';

const Cart = () => {
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const total = cart.reduce((acc, product) => acc + (product.price * product.count), 0);
    const [showCart, setShowCart] = useState(true); // Initialize showCart state

    const handleBackgroundClick = () => {
        setShowCart(false); // Set showCart to false when the background is clicked
    };

    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId))}; // Dispatch action to remove the product from the cart

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
                        zIndex: 9999,
                    }}
                    onClick={handleBackgroundClick} // Attach onClick event handler to close the cart when background is clicked
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
                            flexDirection: "column"
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing the cart when clicked inside the cart box
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography>Cart</Typography>
                            <MuiButton onClick={() => dispatch(clearCart())}>Remove All</MuiButton>
                        </Box>
                        {cart.map((product) => {
                            return (
                                <Box
                                    key={product.id}
                                    sx={{
                                        display: "flex",
                                        marginLeft: "1rem 0",
                                        marginBottom: "0.3rem",
                                        justifyContent: 'space-between',
                                    }}
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
                            <Typography>£{total}</Typography>
                        </Box>
                        <Button
                            color="#d97d45"
                            variant="contained"
                            sx={{ width: "100%", marginTop: "1rem" }}
                        >
                            <Link href="/checkout">Checkout</Link>
                        </Button>
                    </Box>
                </Box>
            )}
        </React.Fragment>
    );
};

export default Cart;