import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function DataFetching(props){

  
  const[page, setPage]= useState(1);

    const[posts, setPosts]= useState([])

    useEffect(()=>{
      var list=[]
        axios.get(props.api1)
        .then(res=> {
            // console.log(res.data.articles)
            list=res.data.articles;
            
        //     axios.get(props.api2)
        // .then(res=> {
        //     // console.log(res.data.articles)
        //     list=list.concat(res.data.articles);

        //     axios.get(props.api3)
        // .then(res=> {
        //     // console.log(res.data.articles)
        //     list=list.concat(res.data.articles);

            console.log(list);
            setPosts(list);
         
          }).catch(err =>{
            console.log(err)
        })    
            
        // }).catch(err =>{
        //     console.log(err)
        // })
            
        // }).catch(err =>{
        //     console.log(err)
        // })

    },[props.api1])

    function handleChange (event,value) {
      console.log(value);
      setPage(value);
    }

    return(
    
         
<Box xs={{ width: '100%' }} className="box" >
<div className="page">
<Pagination count={10} page={page} onChange={handleChange} />
</div>

      <Grid alignItems="left" container rowSpacing={{ xs: 30, sm: 3, md: 3 }} columnSpacing={1} >


      {posts.slice((page-1)*6,page*6).map(post =>
                      {  return (
        
          <Item  className="items" >
<div >
          <Card sx={{ maxWidth: 358 }} className="abc">
                              <CardMedia
                                component="img"
                                alt="loading"
                                height="220"
                                image={ post.urlToImage}
                                className="img"
                              />
                              <CardContent className="content" >
                                <Typography gutterBottom variant="h6" component="div">
                                {post.author}
                                </Typography>
                                <Typography gutterBottom variant="h7" component="div" className="title">
                                {post.title}
                                </Typography>
                                <Typography variant="body2" color="black" className="body" >
                                {post.content}
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                {post.description}
                                </Typography> */}
                                <Typography variant="body3" color="text.secondary">
                                Published at : {post.publishedAt}
                                </Typography>
                              </CardContent>

                              <CardActions className="cards">
                                <Button size="small" ><a  href={post.url}>More Description</a></Button>
                              </CardActions>

                            </Card>
                            </div>

          </Item>
                      )})}
      
         </Grid>
         {/* <Pagination count={10} page={page} onChange={handleChange} className="page" /> */}
         </Box>
         
    )
}

export default DataFetching