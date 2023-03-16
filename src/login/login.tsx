import React from "react";
import logo from '../logo/Logo.png'
import hinh from '../hinh/hinh.png'
import './login.css'

export const Login=()=>{
    return(
        <div className='login-page'>
            <div className="login-form">
                <div className="logo-alta">
                    <img src={logo} ></img>
                </div>
            <div className="form-login">
                <div className="form-group">
                    <label htmlFor="username">Tên đăng nhập </label> <br />
                    <input type="text" className="form-control" id="username" placeholder=" Username " />
            </div>
            <div className="form-group">
                <label htmlFor="password">Mật khẩu </label><br />
                <div className='from-controlpass'>
                <input type="password" className="form-control" id="password" placeholder=" Password " />
            </div> 
            </div>
        </div>
        <div className="forget-password">Quên mật khẩu?</div>
        <button type="submit" className="btn-primary">Đăng nhập</button> 
      </div>
      <div className='login-image'>
          <img className="image-one"src={hinh}  />
        </div>
    </div>
  )
}
export default Login;