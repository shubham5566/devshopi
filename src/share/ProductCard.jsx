import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import { gsap } from "gsap"
export default function ProductCard({ product }) {
  const productRef = React.useRef()
  React.useEffect(() => {
    console.log(productRef.current);
    // gsap.from(productRef.current, { y: 50, duration: 2 })
    gsap.fromTo(productRef.current, { opacity: 0 }, { opacity: 1, duration: 2 })

  }, [])
  return (
    <Link to={`/product-detail/${product.id}`} >
      <Card sx={{ maxWidth: 345 }} ref={productRef}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add To Cart</Button>
          <Button size="small">Buy Now</Button>
        </CardActions>
      </Card>
    </Link>
  );
}
