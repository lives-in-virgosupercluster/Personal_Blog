
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Post from './Post';

function App() {
  return (
    <>
    <Router basename="/" >
     
    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Post" element ={<Post/>}/>
            
        </Routes>
    </Router>
    </>
  )
    
}

export default App;
