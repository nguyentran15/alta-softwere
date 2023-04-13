import React from "react";
import "./index.scss";
import Bodyleft from "../list";
import User from "../User";
import Down from "../../img/Down.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Report = () => {
  return (
    <div className="report">
      <div className="report_left">
        <Bodyleft />
      </div>
      <div className="report_right">
        <div className="report_right_top">
          <div className="report_right_top_title">
            <span className="report_right_top_title_1">Báo cáo</span>
            <span className="report_right_top_title_2">{">"} </span>
            <span className="report_right_top_title_3">Lập báo cáo</span>
          </div>
          <div className="user">
            <User />
          </div>
        </div>
        <div className="report_right_content">
          <div className="report_right_content_title">
            <div className="report_right_content_title_1">
              <a>Chọn thời gian</a>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="report_right_bottom">
          <table className="report_right_bottom_table">
            <tr>
              <th>Số thứ tự</th>
              <th>Tên dịch vụ </th>
              <th>Thời gian cấp </th>
              <th>Tình trạng </th>
              <th>Nguồn cấp </th>
            </tr>
            <tr>
              <td>2010001</td>
              <td>Khám tim mạch</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="blue"></span>
                Ngưng hoạt động
              </td>
              <td>Kiosk</td>
            </tr>
            <tr>
              <td>2010002</td>
              <td>Răng hàm mặt</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="gray"></span>
                Hoạt động
              </td>
              <td>Hệ thống</td>
            </tr>
            <tr>
              <td>2010003</td>
              <td>Khám sản - phụ khoa</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="red"></span>
                Hoạt động
              </td>
              <td>Kiosk</td>
            </tr>
            <tr>
              <td>2010004</td>
              <td>Răng hàm mặt</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="blue"></span>
                Ngưng hoạt động
              </td>
              <td>Hệ thống</td>
            </tr>
            <tr>
              <td>2010005</td>
              <td>Tai mũi họng</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="blue"></span>
                Hoạt động
              </td>
              <td>Kiosk</td>
            </tr>
            <tr>
              <td>2010006</td>
              <td>Khám tổng quát</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="red"></span>
                Hoạt động
              </td>
              <td>Hệ thống</td>
            </tr>
            <tr>
              <td>2010007</td>
              <td>Khám hô hấp</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="blue"></span>
                Ngưng hoạt động
              </td>
              <td>Kiosk</td>
            </tr>
            <tr>
              <td>2010008</td>
              <td>Khám hô hấp</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="gray"></span>
                Hoạt động
              </td>
              <td>Kiosk</td>
            </tr>
            <tr>
              <td>2010009</td>
              <td>Tai mũi họng</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="red"></span>
                Hoạt động
              </td>
              <td>Hệ thống</td>
            </tr>
            <tr>
              <td>20100010</td>
              <td>Khám sản - phụ khoa</td>
              <td>07:20 - 07/10/2021</td>
              <td>
                <span className="blue"></span>
                Hoạt động
              </td>
              <td>Hệ thống</td>{" "}
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
          <img src={Down} alt="" />
        </Link>
        <p>Tải về</p>
      </div>
    </div>
  );
};

export default Report;
