import { Box, Container, Typography } from '@mui/material';
import React from 'react'

interface Props {
    features: string;
  }

// Returns features of a product
const ProductFeatures = ({ features }: Props) => {
  return (
    <Container>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            maxWidth: "50%",
            marginBottom: "2.5rem"
        }}>
            <Typography variant="h3"
            sx={{
                textTransform: "uppercase",
                fontSize: "2rem",
                fontWeight: 500,
                marginBottom: "2rem"
            }}>Features
            </Typography>
            <Typography sx={{ whiteSpace: 'pre-line' }}>{features}</Typography>
            
        </Box>
    </Container>
  )
}

export default ProductFeatures