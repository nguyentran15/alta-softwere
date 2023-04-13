import React from 'react'
import "./index.scss";
import Bodyleft from '../../list';
import Avt from '../../../img/Avt.png'
import Cal from '../../../img/Cal.png'
import Tik from '../../../img/Tik.png'
import Use from '../../../img/Use.png'
import Sav from '../../../img/Sav.png'
import Dashbroadright from '../Dashbroadright';
import { AreaChart, XAxis, CartesianGrid, YAxis, Tooltip, Area, LineChart, Line } from 'recharts';



const Dashboardday = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    return (
        <div className='dashbroad'>
            <Bodyleft />
            <div className='dashbroad_container'>
                <div className='dashbroad_top'>
                    <div className='dashbroad_top_1'>
                        <span >Dashboard</span>
                    </div>
                </div>
                <div className="dashbroad_bottom">
                    Biểu đồ cấp số
                </div>
                <div className="dashbroad_bottom_about">
                    <div className="dashbroad_bottom_about_stt">
                        <div className="dashbroad_bottom_about_stt_cal">
                            <img src={Cal} alt='' ></img>
                            <p className="dashbroad_bottom_about_stt_itemttitle" >Số thứ tự đã cấp</p>
                        </div>
                        <div className="">
                            <h2 className="">4.221</h2>
                            <div className="">
                                <div className="">
                                    <img src='' alt='' ></img>
                                </div>
                                <div className="" >32.41%</div>
                            </div>
                        </div>
                    </div>

                    <div className="dashbroad_bottom_about_stt">
                        <div className="dashbroad_bottom_about_stt_tik">
                            <img src={Tik} alt=''></img>
                            <p className="">Số thứ tự đã sử dụng</p>
                        </div>
                        <div className="">
                            <h2 className="">3.721</h2>
                            <div className="">
                                <div className="">
                                    <img src="" alt='' ></img>
                                </div>
                                <div className="" >32.41%</div>
                            </div>
                        </div>
                    </div>
                    <div className="dashbroad_bottom_about_stt">
                        <div className="dashbroad_bottom_about_stt_use">
                            <img src={Use} alt='' ></img>
                            <p className="" >Số thứ tự đang chờ</p>
                        </div>
                        <div className="">
                            <h2 className="">468</h2>
                            <div className="">
                                <div className="">
                                    <img src="" alt='' ></img>
                                </div>
                                <div className="" >56,41%</div>
                            </div>
                        </div>
                    </div>



                    <div className="dashbroad_bottom_about_stt">
                        <div className="dashbroad_bottom_about_stt_sav">
                            <img src={Sav} alt=''></img>
                            <p className="" >Số thứ tự đã bỏ qua</p>
                        </div>
                        <div className="">
                            <h2 className="">32</h2>
                            <div className="">
                                <div className="">
                                    <img src='' alt='' ></img>
                                </div>
                                <div className="" >22,41%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='chart'>

                </div>
            </div>

            <Dashbroadright />

        </div>
    )
}

export default Dashboardday;

