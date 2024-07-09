import { Outlet } from 'react-router-dom'
import React from 'react';
import Navbar from '../components/Navbar'

const MainLaout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )

}

export default MainLaout;