import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import CategoryHeader from '../components/CategoryHeader'
import CategoryItemContainer from '../components/CategoryItemContainer'

// Fetches data for the couches category from API and renders the category header and products.
const Couches: NextPage = () => {
  const category = "couches";
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const products = Array.from(new Set(data));

  // Fetch data for couches category from API
  useEffect(() => {
    fetch("/api/data")
    .then((res) => res.json())
    .then((response) => {
        setLoading(false);
        response.map((item: any) => {
          if (item.category === category) {
            // Add fetched item to the beginning of the data array
            data.unshift(item);
          }
        });
    });
  }, [data]);

  // Render loading message while fetching data
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <Nav color="#d48b5f" /> 
    <CategoryHeader category={category} />
    
    {/* Render individual product items */}  
    {products.map((item: any) => {
      return <CategoryItemContainer item={item} key={item.id}/>
    })}
    <Footer />
    </div>
  
  )
}

export default Couches