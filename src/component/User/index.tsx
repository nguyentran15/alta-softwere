import React from 'react';

import Bell from "../../img/Bell.png";
import Avt from "../../img/Avt.png";
import { Link } from 'react-router-dom';
import Notify from '../Notify';

const User = () => {
    return <div className="user">
        <Notify />
        {/* <img src={Bell} alt="" /> */}
        
        <div className="user_about">
            <Link to='/Infor'><img src={Avt} alt="" /></Link>
            <div className="user_about_person">
                <span className="user_about_person_1">Xin Chào</span>
                <span className="user_about_person_2">Lê Quỳnh Ái Vân</span>
            </div>
        </div>
    </div>

};

export default User;
