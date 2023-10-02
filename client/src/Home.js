import { Link } from "react-router-dom";
import React,{useState,useEffect}from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import {logout} from './store/authSlice';
import axios from 'axios';

function Home(){
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
    <main>
      <div className="content">
      <header>
        MyBlog
        </header>
        <nav>
        {isLoggedIn ? (
            // Display the username if the user is logged in
            <>
            <span>Welcome, {username}!</span>
            <button onClick={handleLogout}>Logout</button></>
          ) : (
            // Display login and register links if the user is not logged in
            <>
              <Link to="/Login" style={{ textDecoration: 'none' }}>
                Login
              </Link>
              <Link to="/Register" style={{ textDecoration: 'none' }}>
                Register
              </Link>
            </>
          )}
        </nav>
        
        </div>
      
      <div className="post">
      {posts.map((post, index) => (
        <div className="posts" key={index}>
          <img src="https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/scrum-SAFe-thumbnail.png" alt={post.title} />
          <p>
            <header> <Link to={`/post/${post._id}`}>{post.title}</Link></header>
           <span>{post.subcontent}</span> 
          </p>
        </div>
      ))}
    </div>
      {isLoggedIn &&
            // Display the username if the user is logged in
            <>
            
            <button onClick={handleCreatePost}>Logout</button></>
}
    </main>
)
}
// const mapStateToProps=(state)=>({
//   isLoggedIn:state.auth.isLoggedIn,
// })
export default Home;