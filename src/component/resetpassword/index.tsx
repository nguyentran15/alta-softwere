import React from 'react';
import "./index.scss";
import Logo from '../../img/Logo.png'
import Frame from '../../img/Frame.png'
import { Link } from 'react-router-dom';
const Rspass = () => {
    return (
        <div className="repass">
            <div className="repass_right">
                <div className="repass_right_about">
                    <img src={Logo} alt=""/>
                    <div className="repass_right_bot">
                        <p className="repass_right_bot_1">Đặt lại mật khẩu mới</p>
                        <p className="repass_right_bot_2">Mật khẩu</p>
                        <input className="repass_right_bot_3" type={"password"} placeholder="Password"></input>
                        <p className="repass_right_bot_4">Đặt lại mật khẩu</p>
                        <input className="repass_right_bot_5" type={"password"} placeholder="Password"></input>
                        <Link to="/">
                            <button className="repass_right_bot_6">Xác nhận</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="repass_left">
                <img src={Frame} alt="Ảnh bìa" />
            </div>
        </div>
    )
}

export default Rspass
