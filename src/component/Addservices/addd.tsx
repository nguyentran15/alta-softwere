import React from "react";
import "./index.scss";
import Bodyleft from "../list";
import User from "../User";
import { Link } from "react-router-dom";


const Addservices = () => {
  return (
    <div className="addservices">
      <div className="addservices_left">
        <Bodyleft />
      </div>
      <div className="addservices_right">
        <div className="addservices_right_top">
          <div className="addservices_right_title">
            <span className="addservices_right_title_1">Dịch vụ</span>
            <span className="addservices_right_title_2">{">"} </span>
            <span className="addservices_right_title_3">Danh sách dịch vụ</span>
            <span className="addservices_right_title_4">{">"} </span>
            <span className="addservices_right_title_5">Thêm dịch vụ</span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="addservices_right_bottom">Quản lý dịch vụ</div>
        <div className="addservices_input_title">
          <p>Thông tin dịch vụ</p>
        </div>
        <div className="addservices_input">
          <div className="addservices_input_about">
            <div className="addservices_input_left">
              <div className="addservices_input_left_title">
                <span>Mã dịch vụ:</span>
                <p>*</p>
              </div>
              <input className="input1" placeholder="201"></input>
              <div className="addservices_input_left_title">
                <span>Tên dịch vụ:</span>
                <p>*</p>
              </div>
              <input className="input1" placeholder="Khám tĩnh mạch"></input>
            </div>
            <div className="addservices_input_right">
              <p>Mô tả: </p>
              <input className="input2" placeholder="Mô tả dịch vụ"></input>
            </div>
            <div className="bottom">
              <div className="addservices_bottom">Quy tắc cấp số</div>
              <div className="addservices_bottom_checkbox">
                <div className="addservices_bottom_checkbox_items">
                  <div className="addservices_bottom_checkbox_item">
                    <input type="checkbox" />
                    <span>Tăng tự động từ:</span>
                  </div>
                  <div className="addservices_bottom_checkbox_item">
                    <input type="checkbox" name="" value="" />
                    <span>Prefix:</span>
                  </div>
                  <div className="addservices_bottom_checkbox_item">
                    <input type="checkbox" />
                    <span>Surfix:</span>
                  </div>
                  <div className="addservices_bottom_checkbox_item">
                    <input type="checkbox" />
                    <span>Reset mỗi ngày</span>
                  </div>
                </div>
                <div className="addservices_bottom_input_items">
                  <div className="addservices_bottom_input_item_item">
                    <input type="reset" name="" value="0001" />
                    <span>đến</span>
                    <input type="reset" name="" value="9999" />
                  </div>
                  <div className="addservices_bottom_input_item_item">
                    <input type="reset" name="" value="0001" />
                  </div>

                  <div className="addservices_bottom_input_item_item">
                    <input type="reset" name="" value="0001" />
                  </div>
                </div>
              </div>
              <div className="bottom_content">
                <div className="bottom_content_about">
                  <p>*</p>
                  <span>Là trường thông tin bắt buộc</span>
                </div>
              </div>
            </div>
          </div>
          <div className="addservices_input_button">
            <Link to="/Service">
              <button className="addservices_input_button_1">Hủy</button>
            </Link>
            <Link to="">
              <button className="addservices_input_button_2">
                Thêm dịch vụ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addservices;
export {};

