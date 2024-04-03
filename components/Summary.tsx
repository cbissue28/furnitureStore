import { Box, Typography } from '@mui/material'
import React from 'react'
import { Button } from './Button'

const Summary = () => {
  return (
    <Box sx={{ 
        backgroundColor: "white",
        padding: "2rem",
        margin: "4rem 0rem",
        marginLeft: "2rem",
        width: "25%",
        height: "30%" }}>
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
                £££
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
                £££
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
                £££
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
  )
}

export default Summary