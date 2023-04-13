import "./index.scss";
import React from 'react'
import Logo from '../../img/Logo.png'
import Frame from '../../img/Frame.png'
import { Link } from "react-router-dom";

const Fpass = () => {
    return (
        <div className="fpass">
            <div className="fpass_right">
                <div className="fpass_right_about">
                    <img src={Logo} alt=""/>
                    <div className="fpass_right_bot">
                        <p className="fpass_right_bot_1">Đặt lại mật khẩu</p>
                        <p className="fpass_right_bot_2">Vui lòng nhập email để đặt lại mật khẩu của bạn*</p>
                        <input className="fpass_right_bot_3"></input>
                        <Link to="/">
                            <button className="fpass_right_bot_4">Hủy</button>
                        </Link>
                        <Link to="/Resetpass">
                            <button className="fpass_right_bot_5">Tiếp tục</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="fpass_left">
                <img src={Frame} alt="Ảnh bìa" />
            </div>
        </div>
    )
}

export default Fpass
