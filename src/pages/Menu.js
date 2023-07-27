import React from 'react'
import Layout from '../components/Layout';
import {menuList} from '../data/data';
import {Box,Typography,Card,CardActionArea,CardMedia,CardContent,Button} from '@mui/material';

const Menu = () => {
  return (
    <Layout>
       <Box >
          <Typography variant='h3' sx={{color:"maroon",textAlign:"center",m:3}}>Cafe De Flora Menu</Typography>
          <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
              {
                menuList.map((menu)=>(
                  <Card sx={{m:3,width:"400px",}}>
                    <CardActionArea>
                      <CardMedia sx={{m:2,width:"400px",height:"500px"}} component={'img'} src={menu.image} alt={menu.name} />
                      <CardContent>
                        <Typography sx={{color:"maroon",textAlign:"center"}} variant="h6">
                          {menu.name}
                        </Typography>
                        <Typography variant="h7">
                          {menu.description}
                        </Typography>
                        
                      </CardContent>
                      <Button sx={{m:2}}variant="contained">Add to Cart</Button>
              
                      <Button x={{m:2}}variant="contained">Review</Button>
                    </CardActionArea>
                  </Card>
                ))
              }
          </Box>
        </Box> 
    </Layout>
  )
}

export default Menu