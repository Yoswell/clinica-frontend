import { useAuth } from "@/components/hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom";


export const PrivateRoute = ({allowedRoles} : {allowedRoles? : string []}) => {
    const {user} = useAuth();

    if(!user) return <Navigate to="/login" replace />
    
    if(allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

    return <Outlet/>;
}