import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BazaarLogo from './logos/bazar-logo2.webp';
import Login from './logos/login_icon.svg';
import Cart from './logos/cart-icon.svg';
import { withBaseIcon } from 'react-icons-kit'
import { heartO } from 'react-icons-kit/fa/heartO'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
const SideIconContainer =
    withBaseIcon({ size: 25, style: { color: 'white' } })
export const HeartIcon = () => <SideIconContainer icon={heartO} />
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
export default function Header() {
  const matches = useMediaQuery('(min-width:1024px)');
   useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});
 const isSticky = (e) => {
  const header = document.querySelector('.header-section');
  const scrollTop = window.scrollY;
  scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
};
    return (
      <Box className='header-section'>
        <Box sx={{ backgroundColor: "#3498db"}}>
        <Box  sx={{maxWidth: "100%", height: "60px", display: "flex", justifyContent: "space-between", boxSizing: 'border-box' , margin:'0 1%' }}>
            <Box width={"8%"} sx={{ alignSelf: "center" }}>
                <img alt='icon' src={BazaarLogo} width="100%" />
            </Box>
            <Box sx={{ alignSelf: "center", position: 'relative', width: '50%' }}>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </Box>
            <Box className='header-login tab-view'>
                <Box sx={{ display: 'flex' , cursor:'pointer' }}>
                    <Box sx={{ alignSelf: 'center'  }}>
                        Login</Box>
                    <Box sx={{ paddingLeft: '6px' }}>
                        <img src={Login} width='23px' height='100%' />
                    </Box>
                </Box>
                {matches && <Box sx={{ display: 'flex', cursor:'pointer' }}>
                    <Box sx={{ alignSelf: 'center' }}>
                        Whishlist</Box>
                    <Box sx={{ paddingLeft: '6px' }}>
                        <HeartIcon />
                    </Box>
                </Box>}
                {matches && <Box sx={{ display: 'flex', cursor:'pointer' }}>
                  <Box sx={{ alignSelf: 'center' }}>
                        Cart</Box>
                    <Box sx={{ paddingLeft: '6px' }}>
                        <img src={Cart} width='25px' height='100%' /></Box>
                </Box>}
            </Box>
            </Box>
        </Box>
        </Box>
    )
}