import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom'
import { Badge, Box } from '@mui/material'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'

export default function Navbar() {
const {user} = useSelector(state => state.userData)
  return (
    <>
      <Box sx={{ mb: "75px" }}>

        <AppBar position="fixed" color="primary"  >
          <Toolbar>
            <Typography variant="h6">
              <Link to={'/'}>
                <Button
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Home
                </Button>
              </Link>
              <Link to={'/login'}>
                <Button
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Login {user.email}
                </Button>
              </Link>
              <Link to={'/register'}>
                <Button
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Register
                </Button>
              </Link>
              <Link to={'/cart'}>
                {/* <Button
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Cart
                </Button> */}
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </Link>
              <Link to={'/login'}>
                <Button
                  onClick={e => localStorage.removeItem("login")}
                  variant="text"
                  color='inherit'
                  startIcon={<HomeOutlinedIcon />}>
                  Logout

                </Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  )
}
