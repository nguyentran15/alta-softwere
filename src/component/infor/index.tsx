import React from 'react';
import "./index.scss";
import Bodyleft from '../list';
import Avt from "../../img/Avt.png";
import User from '../User';
import { Link } from 'react-router-dom';

const Infor = () => {
    return (
        <div className='body'>
            <Bodyleft />
            <div className='body_container'>
                <div className='body_container_top'>
                <div className='body_container_top_left'>
                    <span className='equipment_right_title_1'>Thông tin cá nhân</span>
                </div>
                <div className='user'>
                    <User />
                </div>
            </div>
                <div className='body_container_bottom'>
                    <div className='body_container_bottom_item'>
                        <img src={Avt} alt='' />                     
                        <svg fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg>
                        <p className='body_midleft_1'>Lê Quỳnh Ái Vân</p>
                    </div>
                    <div className='body_container_bottom_item'>
                        <div className='body_middle_1'>
                            <p>Tên người dùng</p>
                            <input placeholder='Lê Quỳnh Ái Vân'></input>
                            <p>Số Điện Thoại</p>
                            <input placeholder='0767375921'></input>
                            <p>Email</p>
                            <input placeholder='adminSSO1@domain.com'></input>
                        </div>
                    </div>
                    <div className='body_container_bottom_item'>
                        <div className='body_middle_1'>
                            <p>Tên đăng nhập</p>
                            <input placeholder='lequynhaivan01'></input>
                            <p>Mật khẩu</p>
                            <input placeholder='311940211'></input>
                            <p>Vai trò</p>
                            <input placeholder='Kế toán'></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infor
