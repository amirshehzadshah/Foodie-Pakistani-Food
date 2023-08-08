import { Box, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { setUser } from '../Component/store/slices/UserSlice';

const Login = () => {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Perform signin logic, e.g., API call or authentication
    // On successful signin, dispatch setUser action to update the store
    const user = { username, password };
    dispatch(setUser(user));
  };

  return (
    <div className='login-container'>
      <Card sx={{ maxWidth: 645, borderRadius: 5 }} className='login-section-card'>
        <div className='login-section-card-link'>
          <CardContent className='login-section-card-details'>
            <Typography gutterBottom variant="h5" component="div" className='login-section-card-title'>Welcome to Foodie</Typography>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '21rem' }, }} noValidateautoComplete="off">
              <TextField id="outlined-basic" label="E-mail Address" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Box>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '21rem' }, }} noValidateautoComplete="off">
              <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Box>
            <div className="login-section-secondary-button">
              <button className="login-secondary-button" onClick={handleSignIn}>
                Submit
              </button>
            </div>
            <div className="login-section-secondary-button">Don't have an account ?
              <Link to={'/register'} className="login-section-register-button">Register here</Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default Login