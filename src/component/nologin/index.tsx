import "./index.scss";
import Logo from '../../img/Logo.png';
import Abc from '../../img/Group.png';
import React from 'react'

const Nologin = () => {
    return (
        <div className="nologin">
            <div className="nologin_left">
                <img src={Logo} alt="" />
                <div className="nologin_left_nd">
                    <p className="nologin_left_nd_1">Tên đăng nhập*</p>
                    <input className="nologin_left_nd_2" type={"text"} placeholder="Username"></input>
                    <p className="nologin_left_nd_3">Mật khẩu*</p>
                    <input className="nologin_left_nd_4" type={"password"} placeholder="Password"></input>
                    <p className="nologin_left_nd_5"><svg className="icon" width="16" height="16" fill="currentColor" color="#FF0000" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                    </svg>Sai mật khẩu hoặc tên đăng nhập </p>
                    <button className="nologin_left_nd_6">Đăng nhập</button>
                    <p className="nologin_left_nd_7">Quên mật khẩu ? </p>
                </div>
            </div>
            <div className="nologin_right">
                <img src={Abc} alt="" />
                <div className="nologin_right_title">
                    <p className="nologin_right_title_top">Hệ thống</p>
                    <p className="nologin_right_title_bottom">QUẢN LÝ XẾP HÀNG</p>
                </div>
            </div>
        </div>
    )
}

export default Nologin

