import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
    return (
    <div className="flex">
        <Sidebar/>
        <Outlet/>
        {/* <MainContainer/>
        <WatchPage/> */}
    </div>)
}

export default Body;