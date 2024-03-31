import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    category: string;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link href={`/${category}`}>
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "20vw"
    }}>
        <Image
        src={`/assets/shared/desktop/image-category-${category}.png`}
        width={250}
        height={220}
        alt={category}
        />
        <Typography variant='h4' 
        sx={{ 
            marginBottom: "1rem", 
            textTransform: 'uppercase',
            fontSize: "1.5rem",
            color: "white",
        }}>{category}</Typography>
        <Typography sx={{ color: "white" }}>SHOP</Typography>
        <Box sx={{ 
            backgroundColor: "#ecbd99", 
            width: "100%",
            height: "14rem",
            position: "relative",
            bottom: "185px",
            zIndex: "-1",
            }}>
        </Box>
    </Box>
    </Link>
  )
}

export default CategoryCard