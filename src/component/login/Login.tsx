import "./index.css";
import Logo from '../../img/Logo.png';
import Abc from '../../img/Group.png';
import React from 'react'
import { Link} from 'react-router-dom';


const Login = () => {
    return (
        <div className='login-page'>
            <div className="login-form">
                <div className="logo-alta">
                    <img src={Logo} ></img>
                </div>
            <div className="form-login">
                <div className="form-group">
                    <label htmlFor="username">Tên đăng nhập </label> <br />
                    <input type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder=" Username "
                  
                    />
                  
            </div>
            <div className="form-group">
                <label htmlFor="password">Mật khẩu </label><br />
                <div className='from-controlpass'>
                <input type="password" 
                className="form-control" 
                id="password" 
                placeholder=" Password "
                
                />
              
            </div> 
            </div>
        </div>
        <div className="forget-password">Quên mật khẩu?</div>
        <button
        
        type="submit" 
        className="btn-primary"
        >Đăng nhập</button> 
      </div>
      <div className='login-image'>
          <img className="image-one"src={Abc}/>
        </div>
    </div>
  )
}
export default Login;
