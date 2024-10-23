import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Help from '../Help/Help.jsx'
import ManageBoard from '../ManageBoard/ManageBoard.jsx'
import { SidebarData } from '../../data/SideBarData.js'
import DynamicPage from '../DynamicPage/DynamicPage.jsx'
import Login from '../Login/Login.jsx'

const Main = () => {

    const isAuthenticated = true;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 h-[93vh] p-4">


            <div className="sec-one max-sm:hidden col-span-1 bg-[#F1F1F1] sm:overflow-y-auto rounded-sm">
                <div className="h-full p-4">
                    <Sidebar />

                </div>
            </div>

            <div className="sec-one sm:col-span-2 md:col-span-3 lg:col-span-4 sm:overflow-y-auto rounded-sm  bg-[#F1F1F1]">
                <div className="h-full p-4">

                    <Routes>
                        <Route
                            path="/"
                            element={isAuthenticated ? <Navigate to="/profile" /> : <Navigate to="/login" />}
                        />

                        {SidebarData.map((item, index) => (
                            <Route key={index} path={item.link} element={<DynamicPage name={item.name} />} />
                        ))}

                        {!isAuthenticated && (
                            <Route path="/login" element={<Login />} />
                        )}

                    </Routes>

                </div>
            </div>
        </div>
    )
}

export default Main