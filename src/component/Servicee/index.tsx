import React from "react";
import "./index.scss";
import Bodyleft from "../list";
import User from "../User";
import Add from "../../img/Add.png";
import { Link } from "react-router-dom";


const Service = () => {
  return (
    <div className="service">
      <div className="service_left">
        <Bodyleft />
      </div>
      <div className="service_right">
        <div className="service_right_top">
          <div className="service_right_title">
            <span className="service_right_title_1">Dịch vụ</span>
            <span className="service_right_title_2">{">"} </span>
            <span className="service_right_title_3">Danh sách dịch vụ</span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="service_right_bottom">Quản lí dịch vụ</div>
        <div className="service_right_content">
          <div className="service_right_content_icon">
            <div className="service_right_content_icon_1">
              <div className="service_right_content_icon_1_about">
                <div className="service_right_content_icon_1_title">
                  <a>Trạng thái hoạt động</a>
                </div>
                <div className="service_right_content_icon_1_nd">
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
              <div className="service_right_content_icon_2_about">
                <div className="service_right_content_icon_2_title">
                  <a>Chọn thời gian</a>
                </div>
                <div className="service_right_content_icon_2_nd"></div>
              </div>
              <div className="service_right_content_icon_3_about">
                <div className="service_right_content_icon_3_title">
                  <a>Từ khóa</a>
                </div>
                <div className="service_right_content_icon_3_nd">
                  <div className="a">
                    <input
                      className="input"
                      type="text"
                      placeholder="Nhập từ khóa "
                      name="search"
                    />
                    <button className="" type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service_right_content_table">
            <table className="service_right_content_table_device">
              <tr className="title">
                <th>Mã dịch vụ</th>
                <th></th>
                <th>Tên dịch vụ</th>
                <th>Mô tả</th>
                <th></th>
                <th>Trạng thái hoạt động</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>
                  <span className="redd"></span>Mô tả dịch vụ 1
                </td>
                <td>
                  <span className="redd"></span>
                </td>
                <td>Hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>Hoạt động</td>
                <td>
                  <span className="gren"></span>
                </td>
                <td>Hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>
                </td>
                <td>Hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>
                </td>
                <td>Hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>
                </td>
                <td>Hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>
                </td>
                <td>Hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>
                </td>
                <td>Hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>
                </td>
                <td>Ngưng hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>
                </td>
                <td>Hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
              <tr>
                <td>KIO_01</td>
                <td></td>
                <td>Kiosk</td>
                <td>
                  <span className="a"></span>Hoạt động
                </td>
                <td>
                  <span className="a"></span>
                </td>
                <td>Hoạt động</td>
                <td>Chi tiết</td>
                <td>Cập nhật</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="service_right_add">
        <Link to="/Addservices">
          <img src={Add} alt="" />
        </Link>
        <p>Thêm dịch vụ</p>
      </div>
    </div>
  );
};

export default Service;
