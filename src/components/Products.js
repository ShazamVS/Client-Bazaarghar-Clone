import { useState, useEffect } from 'react'
import axios from 'axios'
import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Products() {
  const [productimg, setProductimg] = useState([])
  const [price, setPrice] = useState([])
  const [discription, setDiscription] = useState([])
  useEffect(() => {
    axios.get("https://ecommerce-homepage.herokuapp.com/products/?page=1&limit=12").then((response) => {
      console.log("Products-data:", response.data)
      const products = response.data.result.docs.map((imag) => {
        return imag.images[0].location;
      })
      setProductimg(products)
      const price = [];
      const disc = [];
      const details = response.data.result.docs.map((value, index) => {
        price.push(value.price)
        disc.push(value.description)
      })
      setPrice(price)
      setDiscription(disc)
    })
  }, [])
  const settings = {
    dots: false,
    autoplay: false,
    infinite: false,
    arrows:false,
    slidesToShow: 6.5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows:2,
        },
      },
    ]
  };
  return (
    <Box sx={{ backgroundColor: "white", padding: "20px", margin: "1% 1%" }} >
      <Box className="">
        <Typography variant="h6" sx={{textAlign:'center', marginBottom:'1%'}}>Men</Typography>
        <Slider {...settings}>
          {productimg.map((value, index) => (
            <Box key={index} sx={{ height: '200px' }}>
              <img alt="bazaarghar" src={value} style={{ borderRadius: '10px' }} />
              <Typography sx={{
                color: "rgb(255, 131, 25)",
                fontSize: '15px',
                lineHeight: '1em',
                marginTop: '15px'
              }}>
                {price[index] + " PKR"}</Typography>
              <Typography sx={{
                boxSizing: "border-box",
                overflow: "hidden",
                height: '39px',
                lineHeight: '1.2em',
                fontSize: '15px',
                marginTop: '8px'
              }}>{discription[index]}</Typography>
            </Box>
          ))}
        </Slider>

        <Typography  sx={{textAlign:'center', marginBottom:'1%', color:'blue', cursor:'pointer'}}>ViewAll</Typography>
      </Box>
      <img alt="Banner" src="https://bazaarghar.com/_next/image?url=%2Fstatic%2Fbanners%2Fhome1.png&w=1920&q=75" width="100%" />
    </Box>
  )
}