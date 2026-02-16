import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Register from "./pages/SignUp";
import Login from "./pages/Login";
import GroupDetails from "./pages/ListOfGroup";
import Profile from "./pages/Profile";
import CreateGroup from "./pages/CreateGroup";
import Donate from "./pages/Donate";
import GroupExpense from "./pages/GroupExpense";

function App() {
  return (
    <div
      className="

      min-h-screen
      flex flex-col
      bg-slate-50
      dark:bg-slate-950
      text-slate-900
      dark:text-slate-100
    "
    >
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <MainLayout>
                <Landing />
              </MainLayout>
            }
          />
          <Route path="signup" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="groups" element={<GroupDetails/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="create_group" element={<CreateGroup/>}/>
          <Route path="donate" element={<Donate/>}/>
          <Route path="group_expenses" element={<GroupExpense/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
