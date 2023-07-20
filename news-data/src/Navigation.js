import React from 'react'
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link} from 'react-router-dom';
import { Grid } from '@mui/material';

import './Navigation.css'

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, }} display='flex'
    >
    <AppBar position="static" className="nav">
      <Toolbar>
        <Grid container>
          <Grid item xs={2} lg={2} md={2}>
            <Box >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 4 }}
              >
                <NewspaperIcon fontSize='large'/>
              </IconButton>
             
            </Box>
          </Grid>
          <Grid item xs={0} md={2} lg={2}>

          </Grid>
          <Grid item xs={10} md={10} lg={7}>
            <Box sx={{float:'right'}} display='flex'>
              <Link to={`/`}><Button style={{color:'white'}} className='button'>HOME</Button></Link>
              <Link to={`/news`}><Button style={{color:'white'}} className='button'>News</Button></Link>
              <Link to={`/About`}><Button style={{color:'white'}} className='button'>About us</Button></Link>
              <Link to={`/Contact`}><Button style={{color:'white'}} className='button'>Contact</Button></Link>
              <Link to={`/Faqs`}><Button style={{color:'white'}} className='button'>FAQs</Button></Link>
            </Box>
          </Grid>

        </Grid>
       
        
        
        
        
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navigation;