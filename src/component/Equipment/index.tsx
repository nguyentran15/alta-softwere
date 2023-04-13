import React from "react";
import "./index.scss";
import Bodyleft from "../list";
import User from "../User";
import Add from "../../img/Add.png";
import { Link } from "react-router-dom";
import Search from "../../img/Search.png";

const Equipment = () => {
  return (
    <div className="equipment">
      <div className="equipment_left">
        <Bodyleft />
      </div>
      <div className="equipment_right">
        <div className="equipment_right_top">
          <div className="equipment_right_title">
            <span className="equipment_right_title_1">Thiết bị</span>
            <span className="equipment_right_title_2">{">"} </span>
            <span className="equipment_right_title_3">Danh sách thiết bị</span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="equipment_right_bottom">Danh sách thiết bị</div>

        <div className="equipment_right_content">
          <div className="equipment_right_content_icon">
            <div className="equipment_right_content_icon_1">
              <div className="equipment_right_content_icon_1_about">
                <div className="equipment_right_content_icon_1_title">
                  <a>Trạng thái hoạt động</a>
                </div>
                <div className="equipment_right_content_icon_1_nd">
                  <form>
                    <select className="a">
                      <option className="" value="Tất cả">
                        Tất cả
                      </option>
                      <option className="" value="Hoạt Động">
                        Hoạt Động
                      </option>
                      <option className="" value="Ngưng hoạt động">
                        Ngưng hoạt động
                      </option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="equipment_right_content_icon_2_about">
                <div className="equipment_right_content_icon_2_title">
                  <a>Trạng thái kết nối</a>
                </div>
                <div className="equipment_right_content_icon_2_nd">
                  <form>
                    <select className="a">
                      <option className="" value="Tất cả">
                        Tất cả
                      </option>
                      <option className="" value="Kết nối">
                        Kết nối
                      </option>
                      <option className="" value="Mất kết nối">
                        Mất kết nối
                      </option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="equipment_right_content_icon_3_about">
                <div className="equipment_right_content_icon_3_title">
                  <a>Từ khóa</a>
                </div>
                <div className="equipment_right_content_icon_3_nd">
                  <div className="a">
                    <input
                      className="input"
                      type="text"
                      placeholder="Nhập từ khóa "
                      name="search"
                    />

                    <img src={Search} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="equipment_right_content_table">
            <table className="equipment_right_content_table_device">
              <tr className="title">
                <th>Mã thiết bị</th>
                <th>Tên thiết bị</th>
                <th>Địa chỉ IP</th>
                <th>Trạng thái hoạt động</th>
                <th>Trạng thái kết nối</th>
                <th>Dịch vụ sử dụng</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>
                  <span className="redd"></span>Ngưng hoạt động
                </td>
                <td>
                  <span className="redd"></span>Mất kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>Hoạt động</td>
                <td>
                  <span className="gren"></span>Kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>Mất kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>
                  <span className="a"></span>Ngưng hoạt động
                </td>
                <td>
                  <span className="a"></span>Kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>Mất kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>Kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>
                  <span className="a"></span>Ngưng hoạt động
                </td>
                <td>
                  <span className="a"></span>Kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>Kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>Kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td>Kiosk</td>
                <td>192.168.1.10</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>Mất kết nối
                </td>
                <td>Khám tim mạch, Khám mắt...</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="equipment_right_add">
        <Link to="/Deviceinfor">
          <img src={Add} alt="" />
        </Link>
        <p>Thêm thiết bị</p>
      </div>
    </div>
  );
};

export default Equipment;
