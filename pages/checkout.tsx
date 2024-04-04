import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import Footer from '../components/Footer'
import Summary from '../components/Summary'
import PaymentForm from '../components/PaymentForm'
import CheckoutNav from '../components/CheckoutNav'

const Checkout: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}> 
      <CheckoutNav color= "#d48b5f" />
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
