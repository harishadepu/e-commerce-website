import React,{useState} from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  const [state, setState] = useState('Login');
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:""
  })

  const changeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const url = "https://e-commerce-back-ko22.onrender.com/"

  const SignUp = async ()=>{
    let responseData;
    await fetch( url + '/signup',{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then((res)=>res.json())
    .then((data)=>{
      responseData = data
    })
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/');
      
    }else{
      alert(responseData.error)
    }

  }
  const Login =async ()=>{  
    let responseData;
    
    await fetch(url + '/login',{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then((res)=>res.json())
    .then((data)=>{
      responseData = data
      console.log(responseData)
    })
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/');
      
    }else{
      alert(responseData.error)
    }

  }


  
  return (
    <div className='logsign-container'>
      <div className='logsign-card'>
        <h1 className='login-title'>{state === 'Login' ? "Log In":"Sign Up" }</h1>
        {state === 'Sign Up' && <input type="text" value={formData.username} onChange={changeHandler} name="username" placeholder='Username' className='login-input'/>}
       <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder='Email address' className='login-input'/>
        <input type="password" value={formData.password} onChange={changeHandler} name="password" placeholder='Password' className='login-input'/>
        <button className='login-btn' onClick={()=>{state === "Login" ? Login():SignUp()}} >Continue</button>
        {state === "Login"? <p className='createaccount'>Create account here? <span className='create' onClick={()=>{setState("Sign Up")}}>Sign Up</span></p>
        :<p className='createaccount'>log in here? <span className='create' onClick={()=>{setState("Login")}}>Log In</span></p>}
        
        
        <div className='input-check'>
          <input type="checkbox" id='checkbox' required/>
        <label htmlFor="checkbox">By condtinuing. i agree to the terms of use & privacy policy</label></div>
        
      </div>
      
    </div>
  )
}

export default LoginSignup
