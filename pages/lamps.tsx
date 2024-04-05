import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import CategoryHeader from '../components/CategoryHeader'
import CategoryItemContainer from '../components/CategoryItemContainer'

// Fetches data for the lamps category from API and renders the category header and products.
const Lamps: NextPage = () => {
  const category = "lamps";
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const products = Array.from(new Set(data));

  useEffect(() => {
    fetch("/api/data")
    .then((res) => res.json())
    .then((response) => {
        setLoading(false);
        response.map((item: any) => {
          if (item.category === category) {
            data.unshift(item);
          }
        });
    });
  }, [data]);


  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <Nav color="#d48b5f" /> 
    <CategoryHeader category={category} />

    {products.map((item: any) => {
      return <CategoryItemContainer item={item} key={item.id}/>
    })}
    <Footer />
    </div>
  
  )
}

export default Lamps