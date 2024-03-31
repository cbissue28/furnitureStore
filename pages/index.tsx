import type { NextPage } from 'next'
import Nav from '../components/Nav'
import { Box, Container, Typography } from '@mui/material'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import { CategoryCardContainer } from '../components/CategoryCardContainer'
import { Button } from '../components/Button'
import Link from 'next/link'
import Image from 'next/image'
import { AltRoute } from '@mui/icons-material'
import MallowCouch from '../components/home/MallowCouch'
import WoojLamp from '../components/home/WoojLamp'
import About from '../components/home/About'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div> 
    <div style={{ backgroundImage: "url(./assets/home/desktop/couchHero.jpg)", 
    height: "96vh",
    backgroundSize: "100%",
    color: "white" }}>

      <Container>
      <Nav color="transparent" />
      <Hero />
      </Container>
    </div>
    <CategoryCardContainer />
    <MallowCouch />
    <WoojLamp />
    <About />
    <Footer />

    </div>
  )
}

export default Home
