import React from 'react'
import {AppBar,Box,Toolbar,Typography,Button} from '@mui/material'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='secondary'>
          <Toolbar>
            <Typography varient='h5' component='div' sx={{flexGrow:1}}>
              Geek-Shop
            </Typography>
            <Button component={NavLink} to='/' style={({isActive})=>{return{backgroundColor:isActive? '#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}> Home </Button>
            <Button component={NavLink} to='/Contact' style={({isActive})=>{return{backgroundColor:isActive? '#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}> Contact </Button>
            <Button component={NavLink} to="/Login" style={({isActive})=>{return{backgroundColor:isActive? '#6d1b7b':''}}} sx={{color:'white',textTransform:'none'}}> Login/Registration </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
};

export default Navbar