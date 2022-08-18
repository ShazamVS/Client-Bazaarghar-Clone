import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from "react"
import React, { useEffect } from 'react'
import arrowIcon from './logos/arrow.svg';
import arrowBack from './logos/arrowBack.svg';
import axios from 'axios'
export default function Sidebar() {
    const [result, setResult] = useState([])
    const [categories, setcategories] = useState([])
    useEffect(() => {
        axios.get("https://apix-stage.bazaarghar.com/v1/categories/getAllCategories").then((response) => {
            console.log(response.data)
            setResult(response.data)
            setcategories(response.data)
        });
    }, []);
    return (
        <Box sx={{height: "100%", overflow: "hidden", borderBottom: "6px solid #E4E4E4" , backgroundColor:"white" }}>
                <Typography sx={{ fontWeight: "bold", fontSize:"15px" , borderBottom: "1px solid #E4E4E4", padding:"5px" }}>TOP CATEGORIES</Typography>
            <Box sx={{margin: "0 5%"}}>
                {categories.map((array, index) => (
                    <Box key={index} sx={{ display: "flex", justifyContent: "space-between", margin: "", boxSizing: "border-box", padding: "15px 0px" }}>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ width: "30px", height: "30px"}}>
                                <img alt='bazaarGhar' src={array.mainImage} width={"100%"} height={"100%"} />
                            </Box>
                            <Box sx={{ alignSelf: "center", padding: "0 8px" }}>
                                <Typography sx={{fontSize:"14px" , fontWeight: "700"}}>{array.name}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: "20px", height: "20px", alignSelf: "center" }} >
                            <img alt='icon' src={arrowIcon} width={"100%"} height={"100%"} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )


}