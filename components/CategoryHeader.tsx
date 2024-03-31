import { Box, Typography } from '@mui/material';
import React from 'react'

interface Props {
    category: string;
}

const CategoryHeader = ({ category }: Props) => {
  return (
    <Box
    sx={{
        backgroundColor: "#d48b5f",
        color: "white",
        minHeight: "14rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}> 
    <Typography variant="h1"
    sx={{
        textTransform: "uppercase",
        fontSize: "2.5rem",
        fontWeight: 790
    }}>
        {category} </Typography>
        
    </Box>
  )
}

export default CategoryHeader