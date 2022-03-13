import React, { useEffect } from "react";
import Sidebar from "components/Sidebar";
import Footer from 'components/Footer';

import { Outlet, useNavigate } from "react-router-dom";

export const SidebarLayout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
          return navigate("/signin")
        }
      }, [])

      
    return (
        <>
                <Sidebar />
            <div className="md:ml-64">
                <Outlet />
                <Footer />
            </div>



        </>
    )
}
