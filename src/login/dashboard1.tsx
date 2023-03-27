import React from "react";
import logo from '../logo/Logo.png'
import logouticon from './icon/log-out.png'
import dashboardicon from './icon/dashboard.png'
import deviceicon from './icon/device.png'
import numbericon from './icon/number.png'
import reporticon from './icon/report.png'
import serviceicon from './icon/service.png'
import settingicon from './icon/setting.png'
import treedoticon from './icon/treedot.png'
import './dashboard.css'

export const Dashboard=()=>{
    return(
        <div className="menu__page">
        <div className="page">
            <div className="menu">
            
                <ul className="menu__item">
                    <div className="logo-alta">
                        <img src={logo} ></img>
                    </div>
                    <li className='item'>
                        <a href='#'>
                            <img className='icon' src={dashboardicon} />
                            Dashboard
                        </a>
                    </li>
                    <li className='item'>
                        <a href='#'>
                            <img className='icon' src={deviceicon} />
                            
                            Thiết bị
                        </a>
                    </li>
                    <li className='item'>
                        <a href='#'>
                            <img className='icon' src={serviceicon} />
                            Dịch vụ
                        </a>
                    </li>
                    <li className='item'>
                        <a href='#'>
                            <img className='icon' src={numbericon} />
                            Cấp số
                        </a>
                    </li>
                    <li className='item'>
                        <a href='#'>
                            <img className='icon' src={reporticon} />
                            Báo cáo
                        </a>
                    </li>
                    <li className='item item__have-list'>
                        <a className='setting' href='#'>
                            <img className='icon' src={settingicon} />
                            Cài đặt hệ thống
                            <img className='icon icon_treedot' src={treedoticon} />
                        </a>
                        <div className="menu__item-setting">
                            <ul className='menu__item-setting-list'>
                                <li>Quản lý vai trò</li>
                                <li>Quản lý tài khoản</li>
                                <li>Nhật ký người dùng</li>
                            </ul>

                        </div>
                    </li>
                    
                </ul>
                <div className="menu__sign--out">
                    <button>
                        <span>
                            <img src={logouticon}/>
                            Đăng xuất
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="content__header">
                <div className="content__header-title">
                    Thông tin cá nhân
                </div>
                <div className="header-user">
                    <div className="header-user">
                        <div className="header-user-bell">
                            <i className="fa-solid-fa-bell"></i>
                        </div>
                       
                    </div>
                    <div className="header-user-infor">
                        <li className='user-hello'>Xin chào</li>
                        <li className='user-name'>Trần Thành Hiếu Nguyên</li>
                    </div>
                </div>
                </div>
                </div>
                </div>
    )
}
export default Dashboard;