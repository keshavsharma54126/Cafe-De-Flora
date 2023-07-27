import React from 'react'
import { useState } from 'react';
import {Box,AppBar,Typography,Toolbar,IconButton,Drawer,Divider} from '@mui/material'
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import '../Styles/navstyle.css';

const Header = () => {

    const[mobileOpen,setMobileOpen]=useState(false);

    const handleDrawerState=()=>{
        setMobileOpen(!mobileOpen);
    }


    const drawer = (
        <Box onClick={handleDrawerState} sx={{textAlign:'center'}}>
            <IconButton onClick={handleDrawerState}>
                    <MenuIcon sx={{color:"White", display:{xs:'block', sm:"none"}}}  />
                    </IconButton>
            <Typography variant='h5' sx={{ml : 2,mr:2,md:4,flexGrow:1}} component='div'>
                        
                        Cafe De Flora
             </Typography>
        <ul className="drawer" >
            <li><Link  to='/'>Home</Link></li>
            <li><Link to='/Menu'>Menu</Link></li>
            <li><Link to='/About'>About Us</Link></li>
            <li><Link to='/Contact'>Contact Us</Link></li>
            
            
            
            
        </ul>
</Box>
    )

    //menu drawer function


  return (
    <>
        <Box>
            <AppBar component={'nav'} sx={{bgcolor:"maroon",}}>     
                <Toolbar>
                    <IconButton onClick={handleDrawerState}>
                        <MenuIcon sx={{color:"White", display:{sm:"none"}}} aria-label="open drawer" edge="start" />
                    </IconButton>
                <LocalCafeIcon />
                    <Typography variant='h6' sx={{ml : 2,flexGrow:1}} component='div'>
                        
                        Cafe De Flora
                    </Typography>
                    <Divider/>
                    <Box sx={{display:{xs:'none',sm:'block'}}}>
                            <ul className='navmenu'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/Menu'>Menu</Link></li>
                                <li><Link to='/About'>About Us</Link></li>
                                <li><Link to='/Contact'>Contact Us</Link></li>
                                
                                
                                
                                
                            </ul>     
                    </Box>
                </Toolbar>
                
            </AppBar>
            <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerState} sx={{"& .MuiDrawer-paper":{boxSizing:"border-box",width:'200px'}}}>
                {drawer}
            </Drawer>
            <Toolbar/>
        </Box>
    </>
  )
}

export default Header