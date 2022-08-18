import Box from '@mui/material/Box';
import Banner from './Banner'
import Products from "./Products";
import Header from './Header';
import Footer from './Footer';
export default function HomePage() {
  return (
    <Box sx={{ maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </Box>
  )
}