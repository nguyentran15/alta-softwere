import React from "react";
import hinh3 from '../hinh3/hinh3.png'
import logo from '../logo/Logo.png'

export const Account1=()=>{
    return(
        <div className="account-page">
            <div className="account-from">
                <div className="logo-alta">
                <img src={logo} ></img>
                </div>
            <h2>Thông tin cá nhân</h2>
            <img src={hinh3}></img>
            <h6>Xin chào</h6>
            <h4>Lê Huỳnh Ái Vân</h4>
            <div className="function">
                <button type="submit" className="Dashboard">Dashboard</button>
                <button type="submit" className="thiet-bi">Thiết bị</button>
                <button type="submit" className="dich-vu">Dịch vụ</button>
                <button type="submit" className="cap-so">Cấp số</button>
                <button type="submit" className="bao-cao">Báo cáo</button>
                <button type="submit" className="cai-dat">Cài đặt hệ thống</button>
                <button type="submit" className="exit">Đăng xuất</button>
            </div>
            <img src={hinh3}></img>
            <h1>Lê Quỳnh Ái Vân</h1>
            </div>
        <div>
            <div className="user" >tên người dùng</div>
            <input type="text"
            className="user-1" 
            id="username" 
            placeholder="Lê Quỳnh Ái Vân"></input>
            <div className="phone" >Số điện thoại</div>
            <input type="text"
            className="user-2" 
            id="phone" 
            placeholder="0767375921"></input>
            <div className="phone" >Email</div>
            <input type="text"
            className="user-3" 
            id="Email" 
            placeholder="admonSSO1@domain.com"></input>
            <div className="user" >Tên đăng nhập</div>
            <input type="text"
            className="user-4" 
            id="name" 
            placeholder="lequynhhaivan01"></input>
            <div className="user" >Mật khẩu</div>
            <input type="text"
            className="user-5" 
            id="password" 
            placeholder="311940211"></input>
            <div className="user" >Vai trò</div>
            <input type="text"
            className="user-6" 
            id="vai-tro" 
            placeholder="Kế toán"></input>
        </div>    
           
        </div>
    )
}
export default Account1;