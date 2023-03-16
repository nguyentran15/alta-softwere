import React from "react";
import logo from '../logo/Logo.png'
import hinh2 from '../hinh2/hinh2.png'
import './password.css'

export const Password=()=>{
    return(
    <div className='login-page'>
            <div className="login-form">
                <div className="logo-alta">
                    <img src={logo} ></img>
                    
                </div>
            <div className="form-login">
                <div className="form-group">
                    <h2>Đặt lại mật khẩu</h2>
                    <label htmlFor="username">Vui lòng nhập lại mật khẩu </label> <br />
                    <input type="text" 
                    className="form-control" 
                    id="username" placeholder=" Username " />
            </div>
        </div>
        <div className="forget-password"></div>
        <button type="submit" className="btn-hủy">hủy</button> 
        <button type="submit" className="btn-brimary">Tiếp tục</button>
      </div>
      <div className='login-image'>
          <img className="image-one" src={hinh2}/>
        </div>
    </div>
    )
}
export default Password