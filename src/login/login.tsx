import React from "react";
import logo from '../logo/Logo.png'
import hinh from '../hinh/hinh.png'
import './login.css'
import { useState } from "react";

const Login=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [validationMsg,setValidationMsg]=useState({ email: '', password: '' })

    const onChangeEmail=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const value =event.target.value
        setEmail(value)
    }
    const onChangePassword=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value
        setPassword(value)
    }
    const validateAll = () => {
        const msg = {
            email:'',
            password:'',
        };
        if (email.length === 0) {
          msg.email = "";
        }
        if (password.length === 0) {
          msg.password = "Sai mật khẩu";
        }
        setValidationMsg(msg);
        return Object.values(msg).every((msg) => msg === '');
    };
    
    const onChangeSubmit = () => {
      const isValid = validateAll();
      if(!isValid) return;
    
    }
    return(
        <div className='login-page'>
            <div className="login-form">
                <div className="logo-alta">
                    <img src={logo} ></img>
                </div>
            <div className="form-login">
                <div className="form-group">
                    <label htmlFor="username">Tên đăng nhập </label> <br />
                    <input type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder=" Username "
                    onChange={onChangeEmail}
                    />
                    <p className="ps">{validationMsg.email}</p>
            </div>
            <div className="form-group">
                <label htmlFor="password">Mật khẩu </label><br />
                <div className='from-controlpass'>
                <input type="password" 
                className="form-control" 
                id="password" 
                placeholder=" Password "
                onChange={onChangePassword} 
                />
                <p className="ps">{validationMsg.password}</p>
            </div> 
            </div>
        </div>
        <div className="forget-password">Quên mật khẩu?</div>
        <button
        onClick={onChangeSubmit} 
        type="submit" 
        className="btn-primary"
        >Đăng nhập</button> 
      </div>
      <div className='login-image'>
          <img className="image-one"src={hinh}/>
        </div>
    </div>
  )
}
export default Login;