import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import { Card } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Navigation from './Navigation'



 const Data = () => {

   console.log(useParams());

   const {title}=useParams();
    const[MyData,SetMyData]=useState([]);
    

    useEffect(()=>
    {
        axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
        .then(res=>SetMyData(res.data.articles))
    },[])

  



  const newNews=MyData.find((item)=>item.title==title);
  console.log(newNews);



return(
  <div>
  <Navigation/>
  <div>
    {
  MyData.length==0?
  <div></div>:
  <Container maxWidth="70">
     <Card>
    <CardContent>
    <Typography gutterBottom variant="h4" component="div">
        {newNews.title}
      
      </Typography>
      <Typography gutterBottom variant="h8" component="div">
        {newNews.description}
        </Typography>

    </CardContent>

       <CardMedia
      component="img"
      height="500"                          
      image={newNews.urlToImage}
/>
  <CardContent >
      
  <Typography gutterBottom variant="h10" component="div">
    {newNews.author}
    </Typography>
  <Typography variant="body2" color="text.secondary">
    {newNews.content}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    To read the full article click below!!
  </Typography>
  </CardContent>
  <CardActions>
      <Button size="small" href={newNews.url}>Learn More</Button> 
  </CardActions>
  </Card>
  </Container>
  }
  </div>
  </div>
)
}

export default Data;
