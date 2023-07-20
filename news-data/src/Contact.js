import React from 'react'
import {Box} from '@mui/material'
import Navigation from './Navigation';
import {Grid} from '@mui/material';
import x from './PngItem_234249.png'

const Contact = () => {
  return (
    <Box>
        <Navigation/>
        <Grid container sx={{mt:10}}>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
            <img
              src={x}
              style={{
                width: "20vw",
              }}
              align='center'
            />

            </Grid>

        </Grid>

    </Box>
  )
}

export default Contact;