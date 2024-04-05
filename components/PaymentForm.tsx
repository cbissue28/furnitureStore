import { Box, FormControlLabel, Radio, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const PaymentForm = () => {
  return (
  <Box sx={{ 
    backgroundColor: "white",
    padding: "4rem",
    margin: "4rem 0rem",
    width: "75%" }}>
        
        <Typography 
        variant="h1"
        sx={{
            fontSize: "2rem",
            textTransform: "uppercase",
            fontWeight: 800, 
            letterSpacing: 1.5,
            marginBottom: "2rem"}}>
        Checkout
        </Typography>
        
        <Box sx={{ marginBottom: "4rem" }}>
            <Typography
            variant="h2"
            sx={{
                textTransform: "uppercase",
                fontSize: "1.5rem",
                color: "#d48b5f",
                fontWeight: 600,
                marginBottom: "1.5rem"}}>
            Billing Details
            </Typography>
            
            <Box sx={{ 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-between" }}>
                    
                    <Box sx={{ 
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem"}}>
                            
                            <TextField
                            id="firstName"
                            label="First Name"
                            variant="outlined"
                            placeholder="First Name"
                            sx={{ width: "20rem" }} />
                            
                            <TextField
                            id="lastName"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Last Name"
                            sx={{ width: "20rem" }} />
                            </Box>
                            
                            <Box sx={{ 
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "1rem" }}>
                                    
                                    <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    placeholder="example@gmail.com"
                                    sx={{ width: "20rem" }} />
                                    
                                    <TextField
                                    id="number"
                                    label="Mobile Number"
                                    variant="outlined"
                                    placeholder="Mobile Number"
                                    sx={{ width: "20rem" }} />
                            </Box>
                    </Box>
            </Box>
            <Box sx={{ marginBottom: "4rem" }}>
                <Typography
                variant="h2"
                sx={{
                    textTransform: "uppercase",
                    fontSize: "1.5rem",
                    color: "#d48b5f",
                    fontWeight: 600,
                    marginBottom: "1.5rem" }}>
                        Shipping Details
                </Typography>
                
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "column",
                    justifyContent: "space-between" }}> 
                
                <Box sx={{ 
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem" }}>
                        
                        <TextField
                        id="firstAddress"
                        label="First Line Address"
                        variant="outlined"
                        placeholder="First Line Address"
                        sx={{ width: "20rem" }} />
                        
                        <TextField
                        id="secondAddress"
                        label="Second Line Address"
                        variant="outlined"
                        placeholder="Second Address"
                        sx={{ width: "20rem" }} />
                </Box>
                
                <Box sx={{ 
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem" }}>
                        
                        <TextField
                        id="city"
                        label="City"
                        variant="outlined"
                        placeholder="City"
                        sx={{ width: "20rem" }} />
                        
                        <TextField
                        id="county"
                        label="County"
                        variant="outlined"
                        placeholder="County"
                        sx={{ width: "20rem" }} />
                </Box>
                
                <TextField
                id="postcode"
                label="Postcode"
                variant="outlined"
                placeholder="Postcode"
                sx={{ width: "20rem", marginBottom: "1rem" }} />
                </Box>        
            </Box>
            
            <Box>
                <Typography
                variant="h2"
                sx={{
                    textTransform: "uppercase",
                    fontSize: "1.5rem",
                    color: "#d48b5f",
                    fontWeight: 600,
                    marginBottom: "1.5rem" }}>
                        Payment Details
                </Typography>
                
                <Typography>Payment Method</Typography>
                
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "column",
                    marginBottom: "2rem" }}>
                        
                        <Box>
                            <FormControlLabel
                            value="paypal"
                            control={<Radio />}
                            label="Paypal" />
                            
                            <Image 
                            src="/assets/shared/desktop/icon-paypal.svg" 
                            alt="paypal icon"
                            width={15}
                            height={10}
                            style={{ transform: "scale(6)", marginLeft: "1.5rem" }}/>
                </Box>
                
                <Box>
                    <FormControlLabel
                    value="klarna"
                    control={<Radio />}
                    label="Klarna" />
                    
                    <Image
                    src="/assets/shared/desktop/icon-klarna.svg"
                    alt="klarna icon"
                    width={15}
                    height={10}
                    style={{ transform: "scale(4)", marginLeft: "1.5rem" }}/>
                </Box>
                
                <Box>
                    <FormControlLabel
                    value="applePay"
                    control={<Radio />}
                    label="Apple Pay" />
                    
                    <Image
                    src="/assets/shared/desktop/icon-apple-pay.svg"
                    alt="apple pay icon"
                    width={15}
                    height={10}
                    style={{ transform: "scale(4)", marginLeft: "1.5rem" }}/>
                </Box>
                </Box>
                
                <Box sx={{ 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between" }}> 
                    
                    <Box sx={{ 
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem" }}>
                            
                            <TextField
                            id="cardNumber"
                            label="Card Number"
                            variant="outlined"
                            sx={{ width: "20rem", marginTop: "1.5rem" }} />
                            
                            <Box sx={{ 
                                display: "flex", 
                                flexDirection: "column", 
                                alignItems: "center" }}>

                                    <Typography sx={{ fontSize: "1rem"}}>Expiration Date</Typography>
                                    
                                    <Box sx={{ display: "flex" }}> 
                                    <TextField
                                    id="month"
                                    label="Month"
                                    variant="outlined"
                                    sx={{ width: "5rem" }} />
                                    
                                    <Typography sx={{ fontSize: "2.6rem", fontWeight: 50 }}>/</Typography>
                                    
                                    <TextField
                                    id="year"
                                    label="Year"
                                    variant="outlined"
                                    sx={{ width: "5rem" }} />
                                    </Box>
                            </Box>
                    </Box>
                    
                    <Box sx={{ 
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem" }}>
                            
                            <TextField
                            id="cardName"
                            label="Name on Card"
                            variant="outlined"
                            sx={{ width: "20rem" }}/>
                            
                            <TextField
                            id="cvv"
                            label="CVV"
                            variant="outlined"
                            sx={{ width: "5rem" }} />
                    </Box>
                </Box>        
            </Box>
 </Box>
  )
}

export default PaymentForm