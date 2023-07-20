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
import Pagination from './Pagination'
import { Link} from 'react-router-dom';

import './card.css'
import Navigation from './Navigation'



const Test=(props)=>
{
    const[MyData,SetMyData]=useState([]);

    const[currentPage,setCurrentPage]=useState(1);
    const[postsPerPage,setPostsPerPage]=useState(8);

  useEffect(()=>
  {
      axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
      .then(res=>SetMyData(res.data.articles))
    .then(res=>console.log(res.data));
  },[])





  const lastPageIndex= currentPage*postsPerPage;
  const firstPostIndex = lastPageIndex-postsPerPage;
  const items= MyData.slice(firstPostIndex,lastPageIndex);
  
  console.log(items)
    return(
        <div>
            <Navigation/>
            
            <Grid container spacing={2} sx={{mt:5}}>
           
               
                {
                    items.length==0?
                    <div></div>:
                    
                    items.map((values)=>
                        (
                            <>
                           
                            <Grid item xs={12} md={6} lg={3}>
                            <Card style={{width:"280px",height:"550px"}} sx={{ maxWidth: 346}} className='card'>
                                <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                
                                image={values.urlToImage}
                            />
                            <CardContent key={values.title}>
                                <Typography gutterBottom variant="h6" component="div">
                                {values.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {values.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                              
                               
                                <Link to={`/data/${values.title}`}>Learn More</Link>
                              
                                
                            </CardActions>
                            </Card>
                            </Grid>
                          
                        
                            
                          
                            </>
                        )
                           
                        )   
                }
                </Grid>
         
            <div className='body'>
            <Pagination  totalPosts={MyData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
            </div>
        </div>
       

    )
}

export default Test