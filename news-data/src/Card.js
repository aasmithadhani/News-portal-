import react from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Cards=(props)=>
{
   


    const[MyData,SetMyData]=useState([]);

  useEffect(()=>
  {
      axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=31c4a414d1e64ec9b3da7d24b2d19131')
      .then(res=>{
        // console.log(res.data.articles)
        SetMyData(res.data.articles)})
  },[])



  
  console.log(MyData)
    return(
        <div>
           <h1>The Wall Street Journal</h1>
           <Grid container>
               
                {
                    MyData.length==0?
                    <div></div>:
                    
                    MyData.map((values)=>
                        (
                            <>
                            
                            <Grid item xs={12} md={6} lg={3} >
                            <Card sx={{ maxWidth: 345 }} >
                                <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                
                                // image={values.urlToImage}
                            />
                             <CardContent key={values.title}>
                                <Typography gutterBottom variant="h5" component="div">
                                {values.author}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                {values.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {values.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={values.url}>Learn More</Button> 
                            </CardActions>
                            </Card>
                            </Grid>
                          
                        
                            
                          
                            </>
                        )
                           
                        )   
                }
                </Grid>
         
            <div className='body'>
            <Stack spacing={2}>
            {/* <Typography>Page: {page}</Typography> */}
            <Pagination count={10} style={
                {
                    display:"flex",
                    justifyContent:'center'
                }
            }/>
            </Stack>
            </div>
        </div>
       

    )
}

export default Cards