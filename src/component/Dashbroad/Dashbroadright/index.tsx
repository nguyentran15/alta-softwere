import React from 'react';
import "./index.scss";
import Red from "../../../img/CircleRed.png"
import Tv from "../../../img/Tv.png"
import Blue from "../../../img/CircleBlue.png"
import Cloud from "../../../img/Cloud.png"
import Green from "../../../img/CircleGreen.png"
import Book from "../../../img/Book.png"
import Date from "../../../img/Date.png"
import User from '../../User';

const Dashbroadright = () => {
    return <div className='bodyright'>
        <div className='bodyright_top'>
            <div>
                <User />
            </div>
            <div className='bodyright_top_title'>
                <span className="">
                    Tổng quan
                </span>
            </div>
            <div className='bodyright_top_nd'>
                <div className='bodyright_top_nd_1'>
                    <div className='bodyright_top_nd_1_right'>
                        <img src={Red} alt='' />
                        <span className='red' >4.221<br /><b><img src={Tv} alt='' /> Thiết bị</b></span>

                    </div>
                    <div className='bodyright_top_nd_1_left'>
                        <div>
                            <span className="bodyright_top_nd_1_left_point"> .</span>
                            <span className="bodyright_top_nd_1_left_status">
                                Đang hoạt động
                            </span>
                            <span className="bodyright_top_nd_1_left_number">3.799</span>
                        </div>
                        <div>
                            <span className="bodyright_top_nd_1_left_point"> .</span>
                            <span className="bodyright_top_nd_1_left_status">
                                Ngưng hoạt động
                            </span>
                            <span className="bodyright_top_nd_1_left_number">422</span>
                        </div>
                    </div>
                </div>
                <div className='bodyright_top_nd_2'>
                    <div className='bodyright_top_nd_2_right'>
                        <img src={Blue} alt='' />
                        <span className='blue'>276<br /><b><img src={Cloud} alt='' /> Dịch vụ</b></span>
                    </div>
                    <div className='bodyright_top_nd_2_left'>
                        <div>
                            <span className="bodyright_top_nd_2_left_point"> .</span>
                            <span className="bodyright_top_nd_2_left_status">
                                Đang hoạt động
                            </span>
                            <span className="bodyright_top_nd_2_left_number">210</span>
                        </div>
                        <div>
                            <span className="bodyright_top_nd_2_left_point"> .</span>
                            <span className="bodyright_top_nd_2_left_status">
                                Ngưng hoạt động
                            </span>
                            <span className="bodyright_top_nd_2_left_number">66</span>
                        </div>
                    </div>
                </div>
                <div className='bodyright_top_nd_3'>
                    <div className='bodyright_top_nd_3_right'>
                        <img src={Green} alt='' />
                        <span className='green'>4.221<br /><b><img src={Book} alt='' /> Cấp số</b></span>
                    </div>
                    <div className='bodyright_top_nd_3_left'>
                        <div>
                            <span className="bodyright_top_nd_3_left_point"> .</span>
                            <span className="bodyright_top_nd_3_left_status">
                                Đang chờ
                            </span>
                            <span className="bodyright_top_nd_3_left_number">3.721</span>
                        </div>
                        <div>
                            <span className="bodyright_top_nd_3_left_point"> .</span>
                            <span className="bodyright_top_nd_3_left_status">
                                Đã sử dụng
                            </span>
                            <span className="bodyright_top_nd_3_left_number">468</span>
                            <div>
                                <span className="bodyright_top_nd_3_left_point"> .</span>
                                <span className="bodyright_top_nd_3_left_status">
                                    Bỏ qua
                                </span>
                                <span className="bodyright_top_nd_3_left_number">32</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='bodyright_bottom'>
            <img src={Date} alt='' />

        </div>

    </div>
};

export default Dashbroadright;
