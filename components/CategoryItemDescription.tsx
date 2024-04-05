import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import { Button } from './Button';

interface Props {
    name: string; // Name of product.
    description: string; //Description of product.
    slug: string; // Slug of product.
}

// Returns description of product 
const CategoryItemDescription = ({ name, description, slug }: Props) => {
  return (
    <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     height: "75vh",
     width: "35vw",
     justifyContent: "center"
    }}>
     <Typography
     variant="h1"
     sx={{ fontWeight: 600, 
     fontSize: "3.5rem",
     textTransform: "uppercase",
     marginBottom: "2rem"}}>
        {name}
     </Typography>
     <Typography variant="body1" sx={{ 
        fontSize: "1.2rem",
        marginBottom: "3rem"}}>
         {description}
     </Typography>
     <Button variant="contained" color="#d97d45">
      <Link href={`/${slug}`}>See Product</Link>
     </Button>
    </Box>
   );
}

export default CategoryItemDescription