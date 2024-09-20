import React from 'react';

import {Outlet, Navigate} from 'react-router-dom';


function ProtectedRoutes (){
    const user = null;

    return (
        user ? <Outlet /> : <Navigate to = "/Login" />
    )
}

export default ProtectedRoutes;