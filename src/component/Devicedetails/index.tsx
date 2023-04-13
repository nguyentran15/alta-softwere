import React from 'react'
import "./index.scss";
import Bodyleft from '../list';
import User from '../User';
import { Link } from "react-router-dom";
import updatedevice from "../../img/updatedevice.png";

const Devicedetails = () => {
    return (
      <div className="devicedetails">
        <div className="devicedetails_left">
          <Bodyleft />
        </div>
        <div className="devicedetails_right">
          <div className="devicedetails_right_top">
            <div className="devicedetails_right_title">
              <span className="devicedetails_right_title_1">Thiết bị</span>
              <span className="devicedetails_right_title_2">{">"} </span>
              <span className="devicedetails_right_title_3">
                Danh sách thiết bị
              </span>
              <span className="devicedetails_right_title_4">{">"} </span>
              <span className="devicedetails_right_title_5">
                Chi tiết thiết bị
              </span>
            </div>
            <div className="user">
              <User />
            </div>
          </div>
          <div className="devicedetails_right_bottom">Quản lý thiết bị</div>
          <div className="devicedetails_content">
            <div className="devicedetails_input_title">
              <p>Thông tin thiết bị</p>
            </div>
            <div className="devicedetails_icon">
              <Link to='/Deviceupdate'><img src={updatedevice} alt=""></img></Link>
              <div><span>Cập nhật thiết bị</span></div>
            </div>
          </div>
          <div className="devicedetails_input">
            <div className="devicedetails_input_about">
              <div className="devicedetails_about">
                <div className="devicedetails_input_left">
                  <div className="devicedetails_input_left_nd1">
                    <div className="devicedetails_input_left_nd1_1">
                      <p>Mã thiết bị: </p>
                    </div>
                    <div className="devicedetails_input_left_nd1_2">
                      <p>KIO_01</p>
                    </div>
                  </div>
                  <div className="devicedetails_input_left_nd2">
                    <div className="devicedetails_input_left_nd2_1">
                      <p>Tên thiết bị: </p>
                    </div>
                    <div className="devicedetails_input_left_nd2_2">
                      <p>Kiosk</p>
                    </div>
                  </div>
                  <div className="devicedetails_input_left_nd3">
                    <div className="devicedetails_input_left_nd3_1">
                      <p>Địa chỉ IP: </p>
                    </div>
                    <div className="devicedetails_input_left_nd3_2">
                      <p>128.172.308</p>
                    </div>
                  </div>
                </div>
                <div className="devicedetails_input_right_nd">
                  <div className="devicedetails_input_right_nd1">
                    <div className="devicedetails_input_right_nd1_1">
                      <p>Loại thiết bị: </p>
                    </div>
                    <div className="devicedetails_input_right_nd1_2">
                      <p>Kiosk</p>
                    </div>
                  </div>
                  <div className="devicedetails_input_right_nd2_1">
                    <div>
                      <p>Tên đăng nhập: </p>
                    </div>
                    <div className="devicedetails_input_right_nd2_2">
                      <p>Linhkyo001</p>
                    </div>
                  </div>
                  <div className="devicedetails_input_right_nd3">
                    <div className="devicedetails_input_right_nd3_1">
                      <p>Mật khẩu: </p>
                    </div>
                    <div className="devicedetails_input_right_nd3_2">
                      <p>CMS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="devicedetails_input_bottom_nd">
                <p>Dịch vụ sử dụng: </p>
                <div>
                  <p>
                    Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám
                    tai mũi họng, Khám hô hấp, Khám tổng quát.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Devicedetails;