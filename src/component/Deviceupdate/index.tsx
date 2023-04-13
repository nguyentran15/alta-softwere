import React from "react";
import "./index.scss";
import Bodyleft from "../list";
import User from "../User";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";

const Deviceupdate = () => {
  const options = ["Kiosk", "Display counter"];
  const lists = [
    {
      MTB: "KIO_01",
      Name: "Kiosk",
      IP: "128.172.308",
      Type: "Kiosk",
      login: "Linhkyo011",
      pass: "CMS",
      title:
        "Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.",
    },
  ];

  const text = [
    {
      text: "Khám tĩnh mạch",
    },
    {
      text: "Khám sản phụ khoa",
    },
    {
      text: "Khám răng hàm mặt",
    },
    {
      text: "Khám tai mũi họng",
    },
    {
      text: "Khám hô hấp",
    },
    {
      text: "Khám tổng quan ",
    },
  ];
  return (
    <div className="deviceupdate">
      <div className="deviceupdate_left">
        <Bodyleft />
      </div>
      <div className="deviceupdate_right">
        <div className="deviceupdate_right_top">
          <div className="deviceupdate_right_title">
            <span className="deviceupdate_right_title_1">Thiết bị</span>
            <span className="deviceupdate_right_title_2">{">"} </span>
            <span className="deviceupdate_right_title_3">
              Danh sách thiết bị
            </span>
            <span className="deviceupdate_right_title_4">{">"} </span>
            <span className="deviceupdate_right_title_5">
              Cập nhật thiết bị
            </span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="deviceupdate_right_bottom">Quản lý thiết bị</div>
        <div className="deviceupdate_input_title">
          <p>Thông tin thiết bị</p>
        </div>
        <div className="deviceupdate_input">
          <div className="deviceupdate_input_about">
            <div className="deviceupdate_input_left">
              <div className="deviceupdate_input_left_title">
                <span>Mã thiết bị: </span>
                <p> *</p>
              </div>
              <input placeholder="KIO_01"></input>
              <div className="deviceupdate_input_left_title">
                <span>Tên thiết bị: </span>
                <p>*</p>
              </div>
              <input placeholder="Kiosk"></input>
              <div className="deviceupdate_input_left_title">
                <span>Địa chỉ IP: </span>
                <p>*</p>
              </div>
              <input placeholder="128.172.308"></input>
            </div>
            <div className="deviceupdate_input_right">
              <div className="deviceupdate_input_right_title">
                <span>Loại thiết bị: </span>
                <p>*</p>
              </div>
              <input placeholder="Kiosk"></input>
              <div className="deviceupdate_input_right_title">
                <span>Tên đăng nhập: </span>
                <p>*</p>
              </div>
              <input placeholder="Linhkyo011"></input>
              <div className="deviceupdate_input_right_title">
                <span>Mật khẩu: </span>
                <p>*</p>
              </div>
              <input placeholder="CMS"></input>
            </div>
            {/* <div className="deviceupdate_input_bottom">
              <p>Dịch vụ sử dụng: *</p>
              <input
                className="input"
              ></input>
            </div> */}
          </div>
          <form>
            <div className="deviceupdate_input_bottom">
              <span>Dịch vụ sử dụng:</span>
              <p>*</p>
            </div>
            <div className="text">
              {text.map((item, index) => {
                return (
                  <div className="text_item" key={index}>
                    <button>
                      {item.text}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5L5 15"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 5L15 15"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="lasttitle">
              <p className="">*</p>
              <span className="">Là trường thông tin bắt buộc</span>
            </div>
          </form>
          <div className="deviceupdate_input_button">
            <Link to="/Equipment">
              <button className="deviceupdate_input_button_1">Hủy bỏ</button>
            </Link>
            <Link to="/Devicedetails">
              <button className="deviceupdate_input_button_2">Cập nhật</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deviceupdate;
