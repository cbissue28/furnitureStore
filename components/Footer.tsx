import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
        padding: "2rem 0", 
        color: "white",
        backgroundColor: "#edc29e"
        }}>
       
      <Container>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link href="/"> 
      <Image
      src="/assets/shared/desktop/navLogo.jpg"
      alt="logo"
      width={190}
      height={30}
      />
      </Link>
      <ul style={{ textTransform: "uppercase", textDecoration: "none" }}>
        <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }} >
          Home</Link>
        <Link href="/couches" style={{ marginRight: "2rem", fontWeight: 700 }}>
          Couches</Link>
        <Link href="/lamps" style={{ marginRight: "2rem", fontWeight: 700 }}>
          Lamps
          </Link>
        <Link href="/tables" style={{ fontWeight: 700 }}>
          Tables
          </Link>
      </ul>
      </Box>
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between",
        marginTop: "1rem",
        alignItems: "flex-end" }}>
        <Typography
        variant="body1"
        sx={{ 
            color: "white", 
            fontSize: "1rem", 
            marginBottom: "3rem",
            maxWidth: "30rem" }}>
            Home Improvement is your one stop online shop to purchase the most unique furniture that you would not
            find on the highstreet. We bring microtrends in the furinutre industry from all around the globe and bring them 
            directly to you. 
        </Typography>
        <Box sx={{ display: "flex" }}>
            <Image 
            src="/assets/shared/desktop/icon-facebook.svg" 
            alt="facebook icon"
            width={25}
            height={25}/>
            <Image 
            src="/assets/shared/desktop/icon-instagram.svg" 
            alt="facebook icon"
            width={25}
            height={25} 
            style={{ marginLeft: "1rem" }}/>

            <Image 
            src="/assets/shared/desktop/icon-twitter.svg" 
            alt="facebook icon"
            width={25}
            height={25} 
            style={{ marginLeft: "1rem" }}/>
        </Box>
      </Box>
      <Typography
        variant="body1"
        sx={{ 
            color: "white", 
            fontSize: "1rem", 
            marginTop: "4rem",
            maxWidth: "30rem" }}>
            © Home Improvement
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
