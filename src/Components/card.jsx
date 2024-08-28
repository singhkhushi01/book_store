import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import book from '../assets/slide3.png';
import './card.css';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{
      margin: "10px 0px 0px 32px"
    }}>
      <CardMedia
        sx={{ height: 140 }}
        // image={book}
        title="Book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Coz she smiled at me!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

