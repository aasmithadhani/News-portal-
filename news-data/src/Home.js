import { Grid } from '@mui/material';
import React from 'react'
import Navigation from './Navigation';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import {Link } from 'react-router-dom'

import x from './news.png'

const Home = () => {
  return (
    <>
    <Navigation/>

    <Grid container  sx={{ backgroundColor: "white", width:'100%', height: '100vh' }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

        <Grid item sx={{ mt: 9 }} md={6} xs={12} lg={6} >
          <Box className='grid' 
          >
            <Box style={{ marginLeft: 80 }}>
              <h1 style={{ fontSize: '5em', color: "#05264E", margin: 'none', padding:'0' , marginBlockEnd:'0'}}>
                News
              </h1>
              <h3 style={{ fontSize: '3em', color: "#5D3FD3" ,margin: 'none', padding:'0', marginBlockStart:'0'}}>
                now at your fingertips
              </h3>
              
              <div
                style={{ fontSize: "1em", alignItems: "left" }}
                data-wow-delay=".1s"
              >
                📢 "Welcome to News Hub: Your Trusted Destination for Up-to-the-Minute News, In-Depth Analysis, and Unparalleled Coverage!" 📰✨
                <br />
              
              </div>
              <Link to='/news'>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "30%",
                  backgroundColor: "#5D3FD3",
                  mt: 5,
                  height:'7vh',
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#5D3FD3",
                    boxShadow: 5,
                  },
                }}
              >
                <strong>Read More </strong>
              </Button>
              </Link>
              </Box>
              </Box>
              </Grid>

              
              <Grid item xs={12} lg={6} className='landing'>
          <Grid sx={{ 
            // float: "left",
             mt: 7 }}>
            <img
              src={x}
              style={{
                width: "40vw",
              }}
            />
          </Grid>
          </Grid>


    </Grid>
    </>
  )
}

export default Home;