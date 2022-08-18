import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function Footer() {
    const matches = useMediaQuery('(min-width:1024px)');
    return (
        <Box sx={{ backgroundColor: "black" }}>
            <Grid container spacing={2} style={{ backgroundColor: "black", color: "white", boxSizing: 'border-box', padding: "20px" }}>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography sx={{paddingBottom:'10px'}} >Quick Links</Typography>
                            <Typography className='footer-link'>Privacy</Typography>
                            <Typography className='footer-link'>T&C</Typography>
                            <Typography className='footer-link'>Shipping</Typography>
                            <Typography className='footer-link'>Return</Typography>
                            <Typography className='footer-link'>Bazaar</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{paddingBottom:'10px'}}>Company</Typography>
                            <Typography className='footer-link'>About Us</Typography>
                            <Typography className='footer-link'>Partners</Typography>
                            <Typography className='footer-link'>Seller FAQs</Typography>
                            <Typography className='footer-link'>Customer FAQs</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{paddingBottom:'10px'}}>Business</Typography>
                            <Typography className='footer-link'>Become a Seller</Typography>
                            <Typography className='footer-link'>CSR</Typography>
                            <Typography className='footer-link'>Creditper</Typography>
                            <Typography className='footer-link'>Shop</Typography>
                            <Typography className='footer-link'>Offers</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {matches && <Grid item xs={6} sx={{ borderLeft: "1px solid white", textAlign: "start" }}>
                    <Typography sx={{paddingBottom:'10px'}}>Contact Us</Typography>
                    <Typography className='footer-link'>Call us 24/7</Typography>
                    <Typography className='footer-link'>+92 301 1166 - 879</Typography>
                    <Typography className='footer-link'>3rd Floor, 4th Rd, Chandni Chowk , Rawalpindi, Punjab 46000, Pakistan</Typography>
                    <Typography className='footer-link'>Email:hello@bazaarghar.com</Typography>
                    <Typography className='footer-link'>A project byVintega Solutions.</Typography>
                </Grid>}
            </Grid>
        </Box>
    )
}