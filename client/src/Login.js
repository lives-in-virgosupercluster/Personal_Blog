







import React,{useState} from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {login} from './store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 

const theme = createTheme();

function Login() {
  const[formData,setFormData]=useState({username:'',
password:'',});
const dispatch=new useDispatch();
const Navigate=new useNavigate();
const handleInputChange=(e)=>{

  const {name,value}=e.target;
  setFormData({
    ...formData,[name]:value,
  });
}
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const username=formData.username;
        dispatch(login({username}));
        Navigate('/');
        // Login successful, you can handle the response here
        // For example, you might update the Redux store with the user's information
        // and then redirect to another page.
      } else {
        // Handle login failure here, e.g., show an error message to the user.
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    // Handle form submission logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"sx={{marginTop:'10rem'}}>
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
        </div>
      </Container>
    </ThemeProvider>
  );
}
// const mapStateToProps=(state)=>({
//   isLoggedIn:state.auth.isLoggedIn,
// });

export default Login;







