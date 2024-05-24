import React from "react";
import { Outlet } from "react-router-dom";

import NavigationDrawers from "./NavigationDrawers";
import SidebarMobile from "./SidebarMobile";

const Root = () => {
  return (
    <div className="flex w-full h-full">
      <NavigationDrawers />
      <Outlet />
    </div>
  );
};

export default Root;
