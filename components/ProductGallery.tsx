import { Box, Container } from '@mui/material';
import Image from 'next/image';
import React from 'react'

interface Props {
    gallery: { 
        first: { desktop: string }; 
        second: { desktop: string } ;
        third: { desktop: string }
      }; 
} 

// Returns gallery photos of products and handles null values
const ProductGallery = ({ gallery }: Props) => {
  return (
    <Container>
        <Box sx={{ 
            display: "flex",
            marginBottom: "3rem",
            justifyContent: "space-between"
    }}> 
        <Box sx={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between"
    }}> 
           {gallery?.first.desktop && (
            <Image
              src={gallery.first.desktop.replace(".", "")}
              alt="product-image"
              height={275}
              width={500}
              style={{ marginBottom: "3rem" }}
            />
          )}

          {gallery?.second?.desktop && (
            <Image
              src={gallery.second.desktop.replace(".", "")}
              alt="product-image"
              height={275}
              width={500}
            />
          )}
        </Box>
        {gallery?.third?.desktop && (
          <Image
            src={gallery.third.desktop.replace(".", "")}
            alt="product-image"
            height={600}
            width={600}
          />
        )}
        </Box>
    </Container>
  )
}

export default ProductGallery