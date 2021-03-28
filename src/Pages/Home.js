import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
// import { Card, Button, CardTitle, CardText, Row, Col,Container } from 'reactstrap';

import {
    Grid,
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    CardMedia,
    CardHeader
} from '@material-ui/core/'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  const [list,setList] = useState([])

  

  useEffect( async() => {
    try {
      const data = await axios.get('https://sandbox.zeroite.com/api/home')
     console.log(data.data.exclusive_offer_products)
     setList(data.data.exclusive_offer_products)
   } catch (err) {
     console.log(err)
       
   }
  }, []);

  console.log(list)

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" style={{marginLeft:"2rem"}}>
            Product
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    
    <div className={classes.root} style={{marginTop:'10px'}}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {list.length > 1 && list.map(elem => (
                    <Grid item xs={12} sm={6} md={3} key={list.indexOf(elem)}>
                        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={elem.primary_image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {elem.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <span>Tax full price :{elem.tax_ful_price}</span> <span> total rating :{elem.total_rating}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
                     </Grid>
                ))}
            </Grid>
        </div>
    </>
  );
}

