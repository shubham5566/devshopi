import React, { useEffect, useRef } from 'react'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ProductCard from "./../share/ProductCard"

import { useDispatch, useSelector } from "react-redux"
import { productAction } from '../store/actions/productAction';
export default function Home() {
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productAction())
  }, [])
  return (
    <div className='mt-75' >

      <Grid container spacing={2} centered>

        {
          products.map(item => <Grid item xs={4} >
            <ProductCard key={item.id} product={item} />
          </Grid>)
        }

      </Grid>
    </div>
  )
}
