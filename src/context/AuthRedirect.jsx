import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";
import Loading from "../components/Loading";

function AuthRedirect({ children }) {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <Loading />;

  if (user) {
    return <Navigate to="/groups" replace />;
  }

  return children;
}

export default AuthRedirect;
