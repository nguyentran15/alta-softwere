import React from "react";
import logo from '../logo/Logo.png'
import hinh2 from '../hinh2/hinh2.png'
import './passwork2.css'

export const Passwordw=()=>{
    return(
        <div className='login-page'>
            <div className="login-form">
                <div className="logo-alta">
                    <img src={logo} ></img>
                </div>
            <div className="form-login">
            <h2>Đặt lại mật khẩu mới</h2>
                <div className="form-group">
                    
                    <label htmlFor="username">Mật Khẩu</label> <br />
                    <input type="password" 
                    className="form-control" 
                    id="email" 
                    placeholder=" Password "
                    />
                    
            </div>
            <div className="form-group">
                <label htmlFor="password">Nhập lại mật khẩu </label><br />
                <div className='from-controlpass'>
                <input type="password" 
                className="form-control" 
                id="password" 
                placeholder=" Password "
                
                />
               
            </div> 
            </div>
        </div>
     
        
        <button
        
        type="submit" 
        className="btn-primary"
        >Xác nhận</button> 
      </div>
      <div className='login-image'>
   
          <img className="image-one"src={hinh2}/>
        </div>
    </div>
    )
    }
    export default Passwordw;