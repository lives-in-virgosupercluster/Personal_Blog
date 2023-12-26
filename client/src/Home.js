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
        <div className="posts" key={index}>
          {/* <img src="https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/scrum-SAFe-thumbnail.png" alt={post.title} /> */}
          <p>
            <header className="postheader"> <Link to={`/post/${post._id}`} style={{ textDecoration: 'none' }}>{post.title}</Link></header>
           <span className="contentpara">{post.subcontent.slice(0, 200)}{post.subcontent.length > 200 ? '...' : ''}</span> 
          </p>
        </div>
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