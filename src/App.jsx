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
import Features from "./pages/Features";
import Security from "./pages/Security";
import About from "./pages/About";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import { CommandIcon } from "lucide-react";
import Community from "./pages/Community";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import GuestGuard from "../guards/GuestGuard";
import AuthRedirect from "./context/AuthRedirect";

const queryClient = new QueryClient();

// window.__TANSTACK_QUERY_CLIENT__ = queryClient;

function App() {
  return (
    <div
      className="
        min-h-screen flex flex-col w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 overflow-y-auto
        no-scrollbar bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100
      "
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {/* These are public routes */}
          <Routes
            element={
              <GuestGuard>
                <Outlet />
              </GuestGuard>
            }
          >
            <Route element={<PublicLayout />}>
              <Route
                path="/"
                element={
                  <AuthRedirect>
                    <Landing />
                  </AuthRedirect>
                }
              />
              <Route path="signup" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="features" element={<Features />} />
              <Route path="security" element={<Security />} />
              <Route path="about" element={<About />} />
              <Route path="blog" element={<Blog />} />
              <Route path="help_center" element={<HelpCenter />} />
              <Route path="contact_us" element={<Contact />} />
              <Route path="community" element={<Community />} />
              <Route path="privacy_policy" element={<PrivacyPolicy />} />
              <Route path="terms_of_services" element={<Terms />} />
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
              <Route path="group_details/:id" element={<MembersOfGroups />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
