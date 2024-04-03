import { Button, Container, Typography } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import Cart from './Cart';
import { useAppSelector } from '../store/hook';

interface Props {
  color: string;
}

const Nav = ({ color }: Props) => {
  const [showCart, setShowCart] = useState(false)
  const { cart } = useAppSelector((state) => state.cart);

  
  return (
    //Display: flex alligns items in the menu horizontally
    <div style={{
    padding: "2rem 0", 
    color: "white",
    backgroundColor: `${color}`,
    }}>
      <Container
      sx={{ display: "flex",
      justifyContent: "space-between",
      alignItems: "center" }}> 
      <Link href="/"> 
      <Image
      src="/assets/shared/desktop/Logo.jpg"
      alt="logo"
      width={190}
      height={30}
      />
      </Link>
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
      <Button onClick={() => setShowCart(!showCart)}>
      <Image
      src="./assets/shared/desktop/icon-cart.svg"
      alt="cart"
      width={30}
      height={30}
      />
      <Typography sx={{ marginLeft: "0.5rem", color: "white" }}>({cart.length})</Typography>
      </Button>
      </Container>
      {showCart ? <Cart /> : null}
    </div>
  );
};

export default Nav