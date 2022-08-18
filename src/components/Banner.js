import { Carousel } from "react-responsive-carousel";
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './SideBar';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function Banner() {
    const matchesm = useMediaQuery('(min-width:600px)');
    const matchetab = useMediaQuery('(min-width:1024px)');
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        axios.get("https://ecommerce-homepage.herokuapp.com/banners/?page=1&limit=10").then((response) => {
            let img = []
            const images = response.data.result.docs.map((value) => {
                return value.image.map((src) => {
                    img.push(src.location);
                });
            })
            setBanners(img)
        });
    }, []);

    return (
        <Box sx={{margin: "0.5% 1%", display:"flex" , gap: 2 , height:"325px" }}>
            {matchetab && <Box width="25%" height="100%">
           <Sidebar />
            </Box>}
            <Box width='100%'>
            <Carousel autoPlay >
                {banners.map((value, index) => (
                    <Box key={index}>
                        <img alt="ok" src={value}  />
                    </Box>
                ))}
            </Carousel>
            </Box>
        </Box>
    )
}