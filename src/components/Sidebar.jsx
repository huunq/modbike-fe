import React from "react";
import { useObserver } from "mobx-react-lite";
import SidebarTab from "./SidebarTab";
import { navigate } from "@reach/router";
import {
  DirectionsBikeRounded,
  GroupRounded,
  ExitToAppRounded,
} from "@material-ui/icons";
import Logo from "./core/Logo";
import Cookies from "js-cookie";

export default function Sidebar(props) {
  function handlerTabClick(url) {
    navigate(url);
  }

  const handleLogout = () => {
    Cookies.remove("auth");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return useObserver(() => (
    <div className="flex-shrink-0 w-56" style={{ backgroundColor: "#023356" }}>
      <div className="py-4">
        <div className="px-4 mb-4 text-center text-white">
          <h3>MODBIKE</h3>
        </div>
      </div>

      <SidebarTab
        id="register"
        name="การจัดการสมาชิก"
        icon={GroupRounded}
        onClick={() => handlerTabClick("/admin/users")}
        currentTab={props.currentTab}
      />
      <SidebarTab
        id="machine"
        name="การจัดการจักรยาน"
        icon={DirectionsBikeRounded}
        onClick={() => handlerTabClick("/admin/bikes")}
        currentTab={props.currentTab}
      />
      <SidebarTab
        id="logout"
        name="ออกจากระบบ"
        icon={ExitToAppRounded}
        onClick={() => handleLogout()}
        currentTab={props.currentTab}
      />
    </div>
  ));
}
