import { Link } from "react-router-dom";
import React,{useState,useEffect}from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import {logout} from './store/authSlice';
import axios from 'axios';
import harshpic from "./images/Logo-harsh-cool.png";
import Sidebar from "./Sidebar";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  darkButton: {
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#333',
    },
   // fontFamily: 'Arial, sans-serif', // Set the desired font family
   border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  buttonText: {
    fontFamily: 'Open Sans, sans-serif', // Set the desired font family
    fontSize: '0.8rem', // Set the desired font size
    textTransform: 'none', 
    padding:'0.1rem'
    
  },
  card: {
    // marginBottom: '20px',
    marginBottom:'2rem',
    backgroundColor: ' #50b8e7;',
    width:"40%",
    height:"200%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    border: '0.2rem solid #0047AB', 
    borderRadius:'1rem',// Add border style here
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease', // Add transition for smooth color change

  '&:hover': {
    backgroundColor: '#0047AB', // Change background color on hover
    cursor: 'pointer', // Optionally, change cursor on hover
  },
  },
  
  cardContent: {
    // padding: '16px',
  },
  cardTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    font:'Roboto Slab'
  },
  cardText: {
    fontSize: '1.2rem',
    color: '#333',
    
  },
}));
function Home(){
  const classes=useStyles();
  const username=useSelector((state)=>state.auth.username);
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  const [posts, setPosts] = useState([]);
  const dispatch=new useDispatch();
  const Navigate=new useNavigate();
  useEffect(() => {
    // Fetch data from your backend API (replace 'YOUR_API_ENDPOINT' with the actual URL)
    axios.get('http://localhost:3001/posts/')
      .then((response) => {
        // Set the retrieved data in the 'posts' state
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('API error:', error);
      });
  }, []);
  const handleLogout = () => {
    // Dispatch the logout action to clear user authentication
    dispatch(logout());
  };
  const handleCreatePost=()=>{
    Navigate('/Post');
  }
return (
  <div className="main_page">
    <main>
      <div className="content">
      <img
              src={harshpic} // Replace with your image URL
              alt="harsh"
              width="200"
              height="200"
              className="logo"
            />
       
        <nav>
        {isLoggedIn ? (
            // Display the username if the user is logged in
            <>
            <span className="logtext">Welcome, {username}!</span>
            <Button className={clsx(classes.darkButton, classes.buttonText)} variant="contained" onClick={handleLogout}>
                Logout
      
    </Button></>
          ) : (
            // Display login and register links if the user is not logged in
            <>
              <Link to="/Login" style={{ textDecoration: 'none' }} className="navtext">
                Login
              </Link>
              <Link to="/Register" style={{ textDecoration: 'none' }} className="navtext">
                Register
              </Link>
            </>
          )}
        </nav>
        
        </div>
        {isLoggedIn && username==='harsh.singh0310@gmail.com' &&
            // Display the username if the user is logged in
            <div className="createpost">
               <Button className={classes.darkButton} variant="contained" onClick={handleCreatePost}>
                Create Post
      
    </Button></div>
            
           
}
<div className="post">
          {posts.map((post, index) => (
            <Card key={index} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.cardTitle} style={{fontFamily:'Roboto Slab ,sans-serif'}}>
                  <Link
                    to={`/post/${post._id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {post.title}
                  </Link>
                </Typography>
                <Typography className={classes.cardText} style={{fontFamily:'Noto Sans,sans-serif'}}>
                  {post.subcontent.slice(0, 200)}
                  {post.subcontent.length > 100 ? '...' : ''}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
     
    </main>
    <aside className="sidebar">
      <Sidebar></Sidebar>
    </aside>
    </div>
)
}
// const mapStateToProps=(state)=>({
//   isLoggedIn:state.auth.isLoggedIn,
// })
export default Home;


