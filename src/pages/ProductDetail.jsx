import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { Stack } from '@mui/material';

import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';

import { useParams } from "react-router-dom"
import { ProductLoader } from '../share';

import { useDispatch, useSelector } from "react-redux"
import { singleProductAction } from '../store/actions/productAction';
import { cartAction } from "./../store/actions/cartAction"
export default function ProductDetail() {
  const dispatch = useDispatch()
  const { singleProduct: product, isLoading } = useSelector(state => state.products)
  const [qty, setqty] = useState(1)
  const { id } = useParams()

  useEffect(() => {
    dispatch(singleProductAction(id))
  }, [])

  const handleIncreement = () => setqty(pre => pre + 1)
  const handleDecreement = () => setqty(pre => pre === 1 ? 1 : pre - 1)

  const handleAddToCart = e => dispatch(cartAction({ ...product, qty }))

  return (
    <>
      {
        isLoading
          ? <ProductLoader />
          : <Card className='mt-75' sx={{ minWidth: 275, p: 4 }}>
            <Grid container spacing={2}>

              <Grid item sm={4}>
                <img src={product?.image} alt="" />
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={2}>
                  <Button
                    variant='contained'
                    color='warning'
                    onClick={handleAddToCart}
                    size="large">Add to Cart</Button>
                  <Button
                    variant='contained'
                    color='warning'
                    size="large">Buy Now</Button>
                </Stack>
                {/* </CardActions> */}
              </Grid>
              <Grid item sm={8}>
                <Stack
                  justifyContent="center"
                  spacing={2}>
                  <Typography variant="h6" color="initial">
                    {product?.name}
                  </Typography>
                  <Typography variant="subtitle2" color="initial">
                    {product?.description}
                  </Typography>
                  <Typography variant="h4" color="initial">
                    ₹{product?.price}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}>
                    <Button
                      variant='contained'
                      size="large"
                      onClick={handleDecreement}
                    ><RemoveIcon /></Button>

                    <h1>{qty}</h1>
                    <Button
                      variant='contained'
                      size="large"
                      onClick={handleIncreement}
                    >
                      <PlusOneIcon />
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Card>

      }


    </>
  );
}
