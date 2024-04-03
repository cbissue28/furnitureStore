import type { NextPage } from 'next'
import Nav from '../components/Nav'
import { Box, Container, Typography } from '@mui/material'
import Footer from '../components/Footer'
import Summary from '../components/Summary'
import PaymentForm from '../components/PaymentForm'

const Checkout: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}> 
      <Nav color= "#d48b5f" />
    <Container>
    <Box sx={{ display: "flex" }}>
    <PaymentForm />
    <Summary />
    </Box>
    </Container>
    <Footer />
    </div>
  )
}

export default Checkout
