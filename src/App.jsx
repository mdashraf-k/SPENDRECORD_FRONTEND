import PrivateLayout from "./layouts/PrivateLayout";
import Landing from "./pages/Landing";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Register from "./pages/SignUp";
import Login from "./pages/Login";
import GroupDetails from "./pages/ListOfGroup";
import Profile from "./pages/Profile";
import CreateGroup from "./pages/CreateGroup";
import Donate from "./pages/Donate";
import GroupExpense from "./pages/GroupExpense";
import MembersOfGroups from "./pages/MembersOfGroups";
import AuthGuard from "../guards/AuthGuard";
import PublicLayout from "./layouts/PublicLayout";

// in production delete it
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

// window.__TANSTACK_QUERY_CLIENT__ = queryClient;





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
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* These are public routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Landing />} />
              <Route path="signup" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>

            {/* These are Private Routes */}
            <Route
              element={
                <AuthGuard>
                  <Outlet />
                </AuthGuard>
              }
            >
              <Route element={<PrivateLayout />}>
                <Route path="groups" element={<GroupDetails />} />
              </Route>

              <Route path="profile" element={<Profile />} />
              <Route path="create_group" element={<CreateGroup />} />
              <Route path="donate" element={<Donate />} />
              <Route path="group_expenses/:id" element={<GroupExpense />} />
              <Route path="group_details/:id" element={<MembersOfGroups/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
