import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.scss";
import Bodyleft from "../list";
import User from "../User";
import Add from "../../img/Add.png";

export default function Number() {
  return (
    <div className="number">
      <div className="number_left">
        <Bodyleft />
      </div>
      <div className="number_right">
        <div className="number_right_top">
          <div className="number_right_top_title">
            <span className="number_right_top_title_1">Cấp số</span>
            <span className="number_right_top_title_2">{">"} </span>
            <span className="number_right_top_title_3">Danh sách cấp số</span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="number_right_title">Quản lí cấp số</div>
        <div className="number_top_content">
          <div className="top_content">
            <div className="top_content_1">
              <div className="box_title">
                <a>Tên dịch vụ</a>
              </div>
              <div className="box_content">
                <form>
                  <select className="box_content_select">
                    <option className="box_content_option" value="Tất cả">
                      Tất cả
                    </option>
                    <option
                      className="box_content_option"
                      value="Khám sản - Phụ khoa"
                    >
                      Khám sản - Phụ khoa
                    </option>
                    <option
                      className="box_content_option"
                      value="Khám răng hàm mặt"
                    >
                      Khám răng hàm mặt
                    </option>
                    <option
                      className="box_content_option"
                      value="Khám tai mũi họng"
                    >
                      Khám tai mũi họng
                    </option>
                  </select>
                </form>
              </div>
            </div>
            <div className="top_content_2">
              <div>
                <div className="box_title">
                  <a>Tình trạng</a>
                </div>
                <div className="box_content">
                  <form>
                    <select className="box_content_select">
                      <option className="box_content_option" value="Tất cả">
                        Tất cả
                      </option>
                      <option className="box_content_option" value="Đang chờ">
                        Đang chờ
                      </option>
                      <option className="box_content_option" value="Đã sử dụng">
                        Đã sử dụng
                      </option>
                      <option className="box_content_option" value="Bỏ qua">
                        Đã sử dụng
                      </option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
            <div className="top_content_3">
              <div>
                <div className="box_title">
                  <a>Nguồn cấp</a>
                </div>
                <div className="box_content">
                  <form>
                    <select className="box_content_select">
                      <option className="box_content_option" value="Tất cả">
                        Tất cả
                      </option>
                      <option className="box_content_option" value="Kiosk">
                        Kiosk
                      </option>
                      <option className="box_content_option" value="Hệ thống">
                        Hệ thống
                      </option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
            <div className="top_content_5">
              <div className="box_title">
                <a>Từ khóa</a>
              </div>
              <div className="box_content">
                <div className="a">
                  <input
                    className="input"
                    type="text"
                    placeholder="Nhập từ khóa "
                    name="search"
                  />
                  <button className="search_icon" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_content">
          <table className="bottom_content_device">
            <tr>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>Tên dịch vụ </th>
              <th>Thời gian cấp</th>
              <th>Hạn sử dụng</th>
              <th>Trạng thái</th>
              <th>Nguồn cấp</th>
              <th></th>
            </tr>
            <tr>
              <td>2010001</td>
              <td>Lê Huỳnh Ái Vân</td>
              <td>Khám tim mạch</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td>
                <span className="blue_dot "></span>
                Đang chờ
              </td>
              <td>Kiosk</td>
              <td>
                <Link to="/level_management_info">Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010002</td>
              <td>Huỳnh Ái Vân</td>
              <td>Khám sản - Phụ Khoa</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td>
                <span className="gray_dot"></span>
                Đã sử dụng
              </td>
              <td>Kiosk</td>
              <td>
                <Link to="/level_management_info">Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010003</td>
              <td>Lê Ái Vân</td>
              <td>Khám răng hàm mặt</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td>
                <span className="blue_dot"></span>
                Đang chờ
              </td>
              <td>Hệ thống</td>
              <td>
                <Link to="/level_management_info">Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010004</td>
              <td>Nguyễn Ái Vân</td>
              <td>Khám tai mũi họng</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td>
                <span className="blue_dot"></span>
                Đang chờ
              </td>
              <td>Hệ thống</td>
              <td>
                <Link to="/level_management_info">Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010005</td>
              <td>Trần Thị Ái Vân</td>
              <td>Khám hô hấp</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td>
                <span className="blue_dot"></span>
                Đang chờ
              </td>
              <td>Kiosk</td>
              <td>
                <Link to="/level_management_info">Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010006</td>
              <td>Lê Huỳnh Nghĩa</td>
              <td>Khám tổng quát</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td>
                <span className="gray_dot"></span>
                Đã sử dụng
              </td>
              <td>Hệ thống</td>
              <td>
                <Link to="/level_management_info">Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010007</td>
              <td>Lê Huỳnh Nghĩa</td>
              <td>Khám tai mũi họng</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td>
                <span className="gray_dot"></span>
                Đã sử dụng
              </td>
              <td>Kiosk</td>
              <td>
                <Link to="/level_management_info">Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010008</td>
              <td>Lê Huỳnh Đức</td>
              <td>Khám tổng quát</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td>
                <span className="red_dot"></span>Bỏ qua
              </td>
              <td>Hệ thống</td>
              <td>
                <Link to="/level_management_info">Chi tiết</Link>
              </td>
            </tr>
            <tr>
              <td>2010009</td>
              <td>Lê Thị Cẩm Tiên</td>
              <td>Khám tai mũi họng</td>
              <td>14:35 - 07/11/2021</td>
              <td>14:35 - 12/11/2021</td>
              <td>
                <span className="gray_dot"></span>
                Đã sử dụng
              </td>
              <td>Hệ thống</td>
              <td>
                <Link to="/level_management_info">Chi tiết</Link>
              </td>
            </tr>
          </table>
          <div className="bottom_title">
            <div className="nextpage">
              <a className="caret_left"></a>
              <a className="page_active">1</a>
              <a>2</a>
              <a>3</a>
              <a>4</a>
              <a>5</a>
              <a>...</a>
              <a>10</a>
              <a className="caret_right"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="number_right_add">
        <Link to="">
          <img src={Add} alt="" />
        </Link>
        <p>Thêm dịch vụ</p>
      </div>
    </div>
  );
}
