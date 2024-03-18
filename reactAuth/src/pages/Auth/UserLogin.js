import { TextField,Button,Box,Alert, CircularProgress } from "@mui/material";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserLoginMutation } from "../../services/userAuthApi";
import { storeToken } from "../../services/LocalStorageService";


const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
  const [userLogin,{isLoading}]=useUserLoginMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    if (actualData.email && actualData.password) {
      const res= await userLogin(actualData)
      if (res.data.status ==='success'){
        // store token in localstorage
        storeToken(res.data.token)
        navigate('/dashboard')
      }
      if(res.data.status==='failed'){
        setError({status:true, msg:res.data.message, type:'error'})
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }

  return (
    <>
    <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <Box textAlign='center'>
        {isLoading ? <CircularProgress/> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>}
        
      </Box>
      <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
      {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
    </Box>
    </>
  )
};

export default UserLogin;