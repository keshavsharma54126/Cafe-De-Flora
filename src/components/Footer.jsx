import React from 'react'
import {Box,Typography} from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';



const Footer = () => {
  return (
    <>
        <Box sx={{textAlign:'center', bgcolor:'black' ,padding:3,color:'white'}}>
            <Box sx={{my:3,"& svg":{
                     fontSize:"60px",
                     cursor:"pointer",
                     mr:2   
            },"& svg:hover":{
                color:"goldenrod",
                transform:'translateX(5px)'
            }}} >
                
              {/*icon*/}
            <TwitterIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
            <GitHubIcon/>
              
            </Box>
            <Typography variant="h5">All Rights Reserved @keshav sharma</Typography>
        </Box>
    </>
  )
}

export default Footer