import { Box, Container } from '@mui/material'
import React from 'react'
import CategoryCard from './CategoryCard'

export const CategoryCardContainer = () => {
  return (
    <Box sx={{ margin: "4rem 0" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between"}}> 
      <CategoryCard category="couches" />
      <CategoryCard category="lamps" />
      <CategoryCard category="tables" />
      </Container>
      </Box>
  )
}
