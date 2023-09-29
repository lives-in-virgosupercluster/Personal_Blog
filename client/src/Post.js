import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; 
function MyForm() {
  const [formData, setFormData] = useState({
    username: '',
    title: '',
    subcontent: '',
    date: '',
    content1: '',
    content2: '',
    content3: '',
  });
  const Navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const postData = {
      username: formData.username,
      title: formData.title,
      subcontent: formData.subcontent,
      date: formData.date,
      content: [formData.content1, formData.content2, formData.content3],
    };
    

    // Make an API call to your backend with Axios (replace 'YOUR_API_ENDPOINT' with your actual endpoint)
    axios
      .post('http://localhost:3001/posts/create', postData)
      .then((response) => {
        // Handle success (e.g., show a success message)
        Navigate('/');
        console.log('API response:', response.data);
      })
      .catch((error) => {
        // Handle error (e.g., show an error message)
        console.error('API error:', error);
      });
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Form</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
              value={formData.username}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="title"
              label="Title"
              variant="outlined"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="subcontent"
              label="Subcontent"
              variant="outlined"
              multiline
              rows={1}
              value={formData.subcontent}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="date"
              label="Date"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.date}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Content Paragraphs</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="content1"
              label="Paragraph 1"
              variant="outlined"
              multiline
              rows={3}
              value={formData.content1}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="content2"
              label="Paragraph 2"
              variant="outlined"
              multiline
              rows={3}
              value={formData.content2}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="content3"
              label="Paragraph 3"
              variant="outlined"
              multiline
              rows={3}
              value={formData.content3}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default MyForm;
