import React, { useState } from 'react'
import './signup.css'

const SignUp = () => {
  const [data,setData] = useState({
    username:"",
    email:"",
    password:""
})
 const eventHandler = e =>{
  setData({...data,[e.target.name]:e.target.value})
 }
 const submitHandler = e =>{
  e.preventDefault();
  console.log(data);
 }
  return (
    <center>
      <div className="container">
        <h3>--Login Form--</h3>
      <form onSubmit={ submitHandler}>
        <label>UserName :</label>
        <input type="text"
        name="username" 
        placeholder='Please Enter username...'
        onChange={eventHandler}
        /> 
        <br/>
        <label>Email :</label>
        <input type="text"
        name="email" 
        placeholder='Please Enter email...'
        onChange={eventHandler}
        />
        <br/>
        <label>Password:</label>
        <input type="text"
        name="password" 
        placeholder='Please Enter password...'
        onChange={eventHandler}
        />
        <br/>
        <input type="submit" value="Login" className='login-btn'/>
      </form>
      </div>
    </center>
  )
}

export default SignUp
