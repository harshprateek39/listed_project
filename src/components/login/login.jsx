import React from "react";
import { useNavigate,NavLink} from "react-router-dom";
import  { useEffect,useState } from 'react'
import {auth, provider} from '../../Google/config'
import { signInWithPopup } from 'firebase/auth'
import "./style.css";
import Dashboard from "../../App";
const App = () => {
  const [value, setValue] = useState('')
  console.log("vaue is",value);
  const handleClick = () => { 
      signInWithPopup(auth, provider).then ((result) => {
          setValue(result.user.email)
          localStorage.setItem('email', result.user.email);
        
        
      })
    login();
  }

  useEffect(() => {
      // setValue(localStorage.getItem('email'))
      if(value){
          login();
      }
  })

  const navigater=useNavigate();
    function login(){
          navigater('/home') }
  return (
    <div className="login">
     <div className="login_left">
     <h1> Board.</h1>
      </div>
     <div className="login_right">
      <div  className="login_main">
        <div className="login_title">
          <h1 style={{"margin":"0px"}}>Sign In</h1>
          <p style={{"margin":"0px", }}>Sign in to your account</p>
        </div>
        <div className="login_button">
          <button onClick={handleClick} className="button_1">
          <img className="btn_img"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
                 <p style={{"margin":"0px"}}> Sign in with Google</p>
          </button>
           <button onClick={handleClick} className="button_1">
          
           <img className="btn_img"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                  alt=""
                />
                 <p style={{"margin":"0px"}}> Sign in with Apple</p>
                </button>
        </div>
        <div  className="lb">
        <form className="login_box">
      <label>Email:
      </label>
      <input type="email" className="login_input" required />
      <label>Password:
      </label>
      <input type="password" className="login_input" required />

      <a href="/" className="alink">Forgot Password?</a>
      <button onClick={handleClick} className="submit_btn" type="submit"> SIgn In</button>
    </form>
        </div>
        <div className="login_footer">
          <p> Dont have account ? <span> <a href="/" className="alink">Register Here</a> </span></p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default App;
