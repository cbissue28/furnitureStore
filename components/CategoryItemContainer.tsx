import { Box, Container } from '@mui/material'
import React from 'react'
import CategoryItemDescription from './CategoryItemDescription'
import CategoryItemImage from './CategoryItemImage'

interface Props {
    item: any;
}

const CategoryItemContainer = ({ item }: Props) => {
  return (
    <Container>
    <Box
    sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }}>
        {item.id % 2 === 0 ? (
            <CategoryItemImage 
          src={item.image.desktop.replace(".", "")} 
          name={item.name} />
        ) : null}
        
          <CategoryItemDescription 
          name={item.name}
          description={item.description}
          id={item.id}/>
        
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