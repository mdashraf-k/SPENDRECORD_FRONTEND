import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../src/hooks/useCurrentUser";
import Loading from "../src/components/Loading";

function GuestGuard({ children }) {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <Loading />;
  if (user) return <Navigate to="/groups" replace />;

  return children;
}

export default GuestGuard;