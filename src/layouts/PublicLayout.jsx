import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar button_detail="Login" url="/login" />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default PublicLayout;
