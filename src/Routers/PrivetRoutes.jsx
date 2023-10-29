import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <div className="w-full h-screen flex justify-center items-center"><progress className="progress progress-error w-56"></progress></div>
    }

    if(user?.email){
        return children
    }
    
    return (
        <Navigate state={location.pathname} to='/login' replace>
            
        </Navigate>
    );
};

export default PrivetRoutes;