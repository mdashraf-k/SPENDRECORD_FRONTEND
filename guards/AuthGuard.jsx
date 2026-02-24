import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../src/hooks/useCurrentUser";

function AuthGuard({children}) {
    const {data: user, isLoading} = useCurrentUser();

    if (isLoading) return <p>Loading</p>;
    if(!user) return <Navigate to="/login" replace/>;

    return children
}

export default AuthGuard
