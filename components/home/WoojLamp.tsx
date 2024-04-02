import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Button } from '../Button'
import Link from 'next/link'

const WoojLamp = () => {
  return (
    <Container> 
    <Box sx={{ 
      backgroundImage: "url('/assets/home/desktop/woojLamp.jpg')", 
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "50% 27%",
      height: "30rem",
      width: "100%", 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      }}>
    
    <Box sx={{ marginLeft: "4rem" }}>
    <Typography
    variant="h4"
    sx={{
        fontWeight: 600,
        marginBottom: "1rem",
        fontSize: "4.5rem",
        color: "white",
    }}>
      WOOJ LAMP
    </Typography>
    <Typography
    variant="body1"
    sx={{ fontSize: "1.25rem", marginBottom: "3.5rem", color: "white" }}>
        The Wooj Lamp has been restocked, order before it is sold 
        out again!
    </Typography>
    <Button variant="outlined" color="white">
    <Link href="/wooj-lamp">See Product</Link>
    </Button>
   </Box>
   </Box>
   </Container>
  )
}

export default WoojLamp