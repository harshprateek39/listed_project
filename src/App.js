import { useState } from 'react';
import './App.css';
import Menu from './components/menu/menu.jsx'
import Admin from './components/admin/admin.jsx';
import Login from './components/login/login';
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom"
function App() {
  const [active, SetActive]=useState(false);
  const handleClick= ()=>{ SetActive(!active);}
  
  return (
     <div className="App">
    
    
    {/* </div> */}
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={
          <div className="appBox"><Menu active={active}/>
    <Admin click={handleClick}  active={active}/></div> }/>
    <Route path="*" element={<Login />} />
        
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
