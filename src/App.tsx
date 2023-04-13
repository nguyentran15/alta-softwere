import Login from "./component/login/Login";
import Fpass from "./component/fpass";
import { Link, Route, Router, Routes } from "react-router-dom";
import Rspass from "./component/resetpassword";
import Nologin from "./component/nologin";
import Bodyleft from "./component/list";
import Infor from "./component/infor";
import Dashboardday from "./component/Dashbroad/Dashbroadday";
import Dashbroadright from "./component/Dashbroad/Dashbroadright";

import Cld from "./component/Calendar";
import User from "./component/User";
import Equipment from "./component/Equipment";
import Deviceinfor from "./component/Deviceinfor";
import Number from "./component/Number";
import Devicedetails from "./component/Devicedetails";
import Deviceupdate from "./component/Deviceupdate";
import Service from "./component/Servicee";
import Notify from "./component/Notify";
import Addservices from "./component/Addservices/addd";
import Report from "./component/Report";
;


function App() {
  return (
    <div className="app">
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Repassword" element={<Fpass />} />
          <Route path="/Resetpass" element={<Rspass />} />
          <Route path="/Nologin" element={<Nologin />}/>
          <Route path="/List" element={<Bodyleft />} />
          <Route path="/Infor" element={<Infor />} />
          <Route path="/Dashbroadday" element={<Dashboardday />} />
          <Route path="/Dashbroadright" element={<Dashbroadright/>} />
          <Route path="/Calendar" element={<Cld />} />
          <Route path="/User" element={<User />} />
          <Route path="/Equipment" element={<Equipment />} />
          <Route path="/Deviceinfor" element={<Deviceinfor />} />
          <Route path="/Number" element={<Number />} />
          <Route path="/Devicedetails" element={<Devicedetails />} />
          <Route path="/Deviceupdate" element={<Deviceupdate />} />
          <Route path="/Service" element={<Service />} />
          <Route path="Notify" element={<Notify />} />
          <Route path="/Addservices" element={<Addservices />} />
          <Route path="/Report" element={<Report />} />
          {/* //test */}
      </Routes>

    </div>        
  );
}

export default App;
