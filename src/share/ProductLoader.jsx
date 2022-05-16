import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ProductLoader() {
  return (
    <>
    


    <Card className='mt-75'  sx={{ minWidth: 275, p:4 }}>
      
      <Grid container spacing={2}>
        <Grid item sm={4}>
        <Skeleton variant="rectangular" width={400} height={200} />

          {/* <CardActions fullwidth sx={{backgroundColor:"red"}}> */}
          <Stack   
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{mt:3}}
          >
            <Skeleton variant="rectangular" width={150} height={50} />
            <Skeleton variant="rectangular" width={150} height={50} />
       
              </Stack>
        {/* </CardActions> */}
        </Grid>
        <Grid item sm={8}>
        <Stack   
          justifyContent="center"
          spacing={2}>
          <Typography variant="h6" color="initial">
          <Skeleton variant="text" />
          </Typography>
          <Typography variant="subtitle2" color="initial">
          <Skeleton variant="text" />
          </Typography>
          <Typography variant="h4" color="initial">
          <Skeleton variant="rectangular" width={200} height={50} />
          </Typography>
          <Stack   
          direction="row"
          spacing={2}>
        <Skeleton variant="rectangular" width={80} height={30} />
        <Skeleton variant="rectangular" width={80} height={30} />
          </Stack>
        </Stack>
        </Grid>
      </Grid>
    </Card>

    </>
  );
}