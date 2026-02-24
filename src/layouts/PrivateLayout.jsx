import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";



// 
function PrivateLayout() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar url="/donate"/>
      <div className="flex-1">
        <Outlet/>
      </div>
    </div>
  );
}


export default PrivateLayout
