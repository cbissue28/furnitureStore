import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Box } from '@mui/material'
import ProductPage from '../components/ProductPage'
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

const productDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [data, setData] = useState([{ id: "0" }]);
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState([{ id: "0" }])

  useEffect(() => {
    fetch("/api/data")
    .then((res) => res.json())
    .then((response) => {
      setData(response)
        setLoading(false);
        response.map((item: any) => {
          if (item.id.toString() === id) {
            setProduct(item);
          }
        });
    });
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
        <Nav color="#d48b5f" />
        <ProductPage product={product} />
        <Footer />
    </Box>
  );
};

export default productDetails;