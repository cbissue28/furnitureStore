import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Box } from '@mui/material'
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import ProductFeatures from '../components/ProductFeatures';
import ProductGallery from '../components/ProductGallery';
import Recommendations from '../components/Recommendations';
import ProductDetails from '../components/ProductDetails';
import { APIProduct } from '../types';

// Renders the details of a specific product including its features, gallery, and recommendations.
const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  const [data, setData] = useState<APIProduct[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState<APIProduct>({
    id: 0,
    slug:"",
    name:"",
    image: {desktop:""},
    category:"",
    price: 0,
    description:"",
    features:"",
    gallery: {
      first: {desktop:""},
      second: {desktop:""},
      third: {desktop:""}
    },
    others: [
      {
        slug:"",
        name:"",
        image: {desktop:""}
      },
      {
        slug:"",
        name:"",
        image: {desktop:""}
      },
      {
        slug:"",
        name:"",
        image: {desktop:""}
      }
    ]
  }
);

  // Fetch product data from API based on slug
  useEffect(() => {
    fetch("/api/data")
    .then((res) => res.json())
    .then((response) => {
      setData(response)
        setLoading(false);
        response.map((item: APIProduct) => {
          if (item.slug === slug) {
            setProduct(item);
          }
        });
    });
  }, [slug]);

  // Render loading message while fetching data
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Renders product page
  return (
    <Box>
        <Nav color="#d48b5f" />
        <ProductDetails product={product} />
        <ProductFeatures features={product.features} />
        <ProductGallery gallery={product.gallery} />
        <Recommendations recommendations={product.others} />
        <Footer />
    </Box>
  );
};

export default ProductPage;