import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Shared/Loading/Loading';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading == true){
        // return <p>Loading.....</p>
        return <Loading></Loading>
    }

    if(user && user.uid){ 
        return children
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;