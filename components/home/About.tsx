import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

// Returns container for About section on homepage.
const About = () => {
  return (
  <Container>
    <Box sx={{ display: "flex", marginTop: "10rem", marginBottom: "2rem" }}>
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center",
        marginRight: "10rem"}}> 
        
        <Typography
        variant="h4"
        sx={{
          marginBottom: "1rem",
          fontSize: "3rem"}}>
            ABOUT US
        </Typography>
        
        <Typography 
        variant="body1"
        sx={{
          color: "black", 
          fontSize: "1rem",
          marginBottom: "3rem"}}>
       Home Improvement was established in 2021 with a vision to enhance the quality of living spaces. 
       Our founder recognised the impact of a persons living environment on their mental well-being, 
       particularly during the pandemic lockdowns. The company's ethos revolves around empowering individuals, 
       especially young professionals, to customise their living spaces to reflect their desired emotions, 
       whether they are unwinding after work or working remotely. We pride ourselves on staying at the forefront of the industry by offering modern, 
       innovative furniture that includes some of the most unique pieces available.
        </Typography>
      </Box>
      
      <Image
      src="/assets/shared/desktop/aboutPhoto.jpg"
      alt="about-image"
      height={500}
      width={450} />
    </Box>
    </Container>
  )
}

export default About