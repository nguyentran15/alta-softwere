import React from "react";
import "./index.scss";
import Bodyleft from "../list";
import User from "../User";
import { Link } from "react-router-dom";

const Deviceinfor = () => {
  return (
    <div className="deviceinfor">
      <div className="deviceinfor_left">
        <Bodyleft />
      </div>
      <div className="deviceinfor_right">
        <div className="deviceinfor_right_top">
          <div className="deviceinfor_right_title">
            <span className="deviceinfor_right_title_1">Thiết bị</span>
            <span className="deviceinfor_right_title_2">{">"} </span>
            <span className="deviceinfor_right_title_3">
              Danh sách thiết bị
            </span>
            <span className="deviceinfor_right_title_4">{">"} </span>
            <span className="deviceinfor_right_title_5">Thêm thiết bị</span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="deviceinfor_right_bottom">Quản lý thiết bị</div>
        <div className="deviceinfor_input_title">
          <p>Thông tin thiết bị</p>
        </div>
        <div className="deviceinfor_input">
          <div className="deviceinfor_input_about">
            <div className="deviceinfor_input_left">
              <div className="deviceinfor_input_left_title">
                <span>Mã thiết bị: </span>
                <p>*</p>
              </div>
              <input placeholder="Nhập mã thiết bị"></input>
              <div className="deviceinfor_input_left_title">
                <span>Tên thiết bị:</span>
                <p>*</p>
              </div>
              <input placeholder="Nhập tên thiết bị"></input>
              <div className="deviceinfor_input_left_title">
                <span>Địa chỉ IP: </span>
                <p>*</p>
              </div>
              <input placeholder="Nhập địa chỉ IP"></input>
            </div>
            <div className="deviceinfor_input_right">
              <div className="deviceinfor_input_right_title">
                <span>Loại thiết bị: </span>
                <p>*</p>
              </div>
              <input placeholder="Chọn loại thiết bị"></input>
              <div className="deviceinfor_input_right_title">
                <span>Tên đăng nhập: </span>
                <p>*</p>
              </div>
              <input placeholder="Nhập tài khoản"></input>
              <div className="deviceinfor_input_right_title">
                <span>Mật khẩu: </span>
                <p>*</p>
              </div>
              <input placeholder="Nhập mật khẩu"></input>
            </div>
            <div className="deviceinfor_input_bottom">
              <div className="deviceinfor_input_bottom_title">
                <span>Dịch vụ sử dụng: </span>
                <p>*</p>
              </div>
              <input
                className="input"
                placeholder="Nhập dịch vụ sử dụng"
              ></input>
            </div>
          </div>
          <div className="deviceinfor_input_button">
            <Link to="/Equipment">
              <button className="deviceinfor_input_button_1">Hủy</button>
            </Link>
            <Link to="/Devicedetails">
              <button className="deviceinfor_input_button_2">
                Thêm thiết bị
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deviceinfor;
