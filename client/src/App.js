
import './App.css';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Register from './Register';
import Login from './Login';


function App() {
  return (
    <>
    <Router basename="/" >
     
    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            
        </Routes>
    </Router>
    </>
  )
    
}

export default App;
