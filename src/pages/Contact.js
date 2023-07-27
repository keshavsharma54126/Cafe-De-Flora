
import React from 'react'
import { Box ,TableContainer,Typography ,Table ,TableHead, TableCell,TableRow,TableBody} from '@mui/material';
import Layout from '../components/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{mx:5,my:5,textalign: 'center' ,"& h4":{fontweight: 'bold',color:"maroon",textAlign: 'center',mb:4},"& p":{mb:5}}}>
          <Typography variant="h4" >
             Contact My Restaurant
          </Typography>
          <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas, urna ut ultricies fermentum, nunc elit feugiat ligula, non euismod leo ante quis turpis. Quisque eget enim eget dui congue aliquam nec nec leo. Suspendisse in velit nisi. Vestibulum pellentesque at neque vel dignissim. Integer lobortis gravida nunc a varius. Duis pellentesque nibh sit amet mauris suscipit, non commodo mauris venenatis. Sed sagittis et ex at porta. Sed venenatis a diam ac porttitor. Pellentesque pulvinar eros justo, vitae accumsan magna pretium a. Curabitur vel vestibulum odio.

Phasellus vitae sapien ligula. In hac habitasse platea dictumst. Duis ac velit justo. Vivamus mattis massa nec diam eleifend euismod. Nulla euismod erat nec neque varius, eget suscipit nulla porttitor. Mauris a laoreet sapien. Nulla facilisi. Cras quis urna efficitur, commodo purus id, elementum arcu. Nunc dapibus, leo eu vehicula feugiat, dolor purus porttitor dolor, ac dictum dui neque in metus. Aenean sit amet est sit amet mauris varius aliquam. Sed eleifend quam nec enim iaculis commodo. Etiam sit amet leo vitae mi luctus pulvinar.
          </p>
          <Box sx={{width:"600px",p:6.5, "@media (max-width:600px)":{width:"400px"}}}>
            <TableContainer >
              <Table arai-label="contact us">
                <TableHead>
                    <TableRow sx={{backgroundColor:"black"}} >
                      <TableCell sx={{color:"white"} } align="center">
                        Contact Details
                      </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                        <SupportAgentIcon sx={{color:"red",pt:1}}/> 120-7834-1212  tollfree
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                        <EmailIcon sx={{color:"blue",pt:1}}/> cafedeflora511@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                        <LocalPhoneIcon sx={{color:"green",pt:1}}/> 8878909879
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                        <LocationOnIcon />  Shop No-24 25, Santushti Shopping Complex, opp. Samrat Hotel, New Delhi, Delhi 110003
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
      </Box>
    </Layout>
  )
}

export default Contact