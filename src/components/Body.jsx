import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import Head from "./Head";

const Body = () => {
  return (
    <div>
      <Head />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
