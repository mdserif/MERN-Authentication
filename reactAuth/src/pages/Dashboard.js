import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './Auth/ChangePassword';
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useState,useEffect } from 'react';

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeToken('token')
    navigate('/login')
  }


  const token =getToken()
  // api call
  const {data,isSuccess} =useGetLoggedUserQuery(token)

  const [userData, setUserData] = useState({
    email:"",
    name:""
  })

  // store user data in local state
  useEffect(()=>{
    if(data && isSuccess){
      setUserData({
        email:data.user.email,
        name: data.user.name,  
      })
    }
  }, [data, isSuccess])

  return <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }} textAlign='center'>
        <h1>Dashboard</h1>
        <Typography variant='h5'>Email: {userData.email}</Typography>
        <Typography variant='h6'>Name: {userData.name}</Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={8}>
        <ChangePassword />
      </Grid>
    </Grid>
  </>;
};

export default Dashboard;