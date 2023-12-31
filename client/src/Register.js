import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; 
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {login} from './store/authSlice';
import { useDispatch } from 'react-redux';

const theme = createTheme();


function Register() {
  const [showAlert, setShowAlert] = useState(false);

  // Function to handle close of the Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowAlert(false);
  };

  // Your registration logic
  // const handleRegistration = async (formData) => {
  //   try {
  //     // Check if the email already exists (Your logic here)
  //     const emailExists = await checkEmailExists(formData.email);

  //     if (emailExists) {
  //       setShowAlert(true);
  //       return;
  //     }

  //     // Continue with registration logic
  //   } catch (error) {
  //     console.error('Registration error:', error);
  //     // Handle error
  //   }
  // };

  const dispatch=new useDispatch();
  const Navigate=new useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/auth/register', formData);
      if(response.status===200){
        const username=formData.username;
        dispatch(login({username}));
        
        Navigate('/');
      }
     

      // Handle success or any other logic here

      //console.log('Response from the backend:', response.data);
    } catch (error) {
      // Handle errors here
      setShowAlert(true);
      
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ marginTop: '10rem' }}>
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5" align="center">
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </form>
          <Snackbar
        open={showAlert}
        autoHideDuration={6000} // Adjust as needed
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          User with this email already exists. Please use a different email.
        </MuiAlert>
      </Snackbar>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Register;
