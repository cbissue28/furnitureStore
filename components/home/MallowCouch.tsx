import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Button } from '../Button'
import Link from 'next/link'

// Returns container for Mallow Couch section on homepage. 
const MallowCouch = () => {
  return (
  <Container> 
    <Box sx={{ 
      backgroundColor: "#ecbd99", 
      color: "white", 
      display: "flex",
      alignItems: "center",
      marginBottom: "4rem" }}>
        
        <Image
        src="/assets/home/desktop/mallowCouch.png"
        alt="couch"
        width={550}
        height={250}
        style={{ margin: "3rem 10rem 0 4rem" }}/>
        
        <Box sx={{ marginRight: "3rem" }}> 
        <Typography
        variant="h1"
        sx={{
          fontWeight: 600,
          marginBottom: "2rem",
          textTransform: "uppercase",
          fontSize: "3.5rem",
          marginTop: "2rem", }}>
            Mallow Couch
        </Typography>
        
        <Typography
        variant="body1"
        sx={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          A fresh new design to modernise your living room.
        </Typography>
        
         {/* Button redirects user to the Mallow Couch product page */}
        <Button variant="contained" color="#c97b53" sx={{ marginBottom: "2rem" }}>
          <Link href="/mallow-couch">See Product</Link>
        </Button>
        </Box>
    </Box>
  </Container>
  )
}

export default MallowCouch