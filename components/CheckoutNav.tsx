import { Box, Container } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'



interface Props {
  color: string;
}

const CheckoutNav = ({ color }: Props) => {
  return (
    //Display: flex alligns items in the menu horizontally
    <div style={{
    padding: "2rem 0", 
    color: "white",
    backgroundColor: `${color}`,
    }}>
      <Container
      sx={{ display: "flex",
      alignItems: "center" }}> 
      <Link href="/"> 
      <Image
      src="/assets/shared/desktop/Logo.jpg"
      alt="logo"
      width={190}
      height={30}
      />
      </Link>
      <Box sx={{ marginLeft: "15rem" }}> 
      <ul style={{ textTransform: "uppercase", textDecoration: "none" }}>
        <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }} >
          Home</Link>
        <Link href="/couches" style={{ marginRight: "2rem", fontWeight: 700 }}>
          Couches</Link>
        <Link href="/lamps" style={{ marginRight: "2rem", fontWeight: 700 }}>
          Lamps</Link>
          <Link href="/tables" style={{ marginRight: "2rem", fontWeight: 700 }}>
          Tables</Link>
      </ul>
      </Box>
      </Container>
    </div>
  );
};

export default CheckoutNav