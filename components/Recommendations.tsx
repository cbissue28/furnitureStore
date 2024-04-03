import { Container, Box, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import { Button } from './Button';
import Link from 'next/link';

interface Props {
    recommendations: any[];
}

const Recommendations = ({ recommendations }: Props) => {
  return (
    <Container>
        <Box sx={{ 
            display:"flex", 
            flexDirection: "column", 
            justifyContent: "center",
            marginTop: "10rem" }}>
            <Typography variant="h3"
            sx={{
                textTransform: "uppercase",
                fontSize: "2rem",
                fontWeight: 500,
                marginBottom: "2rem",
                textAlign: "center"
            }}>You may also Like
            </Typography>
            <Box sx={{ display: "flex", 
            justifyContent: "space-between"
            }}>
            {recommendations?.map((product) => {
                return (
                    <Box
                    key={product.slug}
                    sx={{ 
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: "3rem",
                    }}>
                        <Image
                        src={product.image.desktop.replace(".", "")}
                        alt={product.name}
                        width={370}
                        height={330}
                        />
                        <Typography variant="h3"
                        sx={{
                            textTransform: "uppercase",
                            fontSize: "2rem",
                            fontWeight: 500,
                            margin: "2rem 0",
                            textAlign: "center"
                            }}>
                             {product.name}
                            </Typography>
                            <Button variant="contained" color="#d97d45"> 
                            <Link href={`/${product.slug}`}> See product</Link>
                            </Button>  
                    </Box>
                );
            })}
            </Box>
        </Box>
    </Container>
  )
}

export default Recommendations