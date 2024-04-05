import { Box, Container } from '@mui/material'
import React from 'react'
import CategoryItemDescription from './CategoryItemDescription'
import CategoryItemImage from './CategoryItemImage'

interface Props {
    item: any; // The individual product.
}

// Displays all products on the category page. 
const CategoryItemContainer = ({ item }: Props) => {
  return (
    <Container>
    <Box
    sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
        {/* Displays each product with a different layout (either image or description first) */}
        {item.id % 2 === 0 ? (
            <CategoryItemImage 
          src={item.image.desktop.replace(".", "")} 
          name={item.name} />
        ) : null}
        
          <CategoryItemDescription 
          name={item.name}
          description={item.description}
          slug={item.slug}/>
        
        {item.id % 2 !== 0 ? (
            <CategoryItemImage 
          src={item.image.desktop.replace(".", "")} 
          name={item.name} />
        ) : null}
        </Box>
        </Container>
  )
}

export default CategoryItemContainer