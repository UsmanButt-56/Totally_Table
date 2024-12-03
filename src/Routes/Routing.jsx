import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Completeprofile from '../Pages/Home/Completeprofile/Completeprofile';
import Activity from '../Pages/Activity/Activity';
import Not_Found from '../Pages/Not_Found/Not_Found';
import Convention_Layout from '../Layout/Convention_Layout/Convention_Layout';
//import Conventions from '../Pages/Conventions/Conventions';
import Event_Layout from '../Layout/Event_Layout/Event_Layout';
import OpenEvent from '../Pages/Conventions/OpenEvent/OpenEvent';
import Friends from '../Pages/Friends/Friends';
import Profile from '../Pages/Profile/Profile';
import Settings from '../Pages/Settings/Settings';
function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/home/complete" element={<Completeprofile />} />
                        <Route path="/activity" element={<Activity />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                        {/* Catch all routes */}
                    </Route>

                    <Route path="*" element={<Not_Found />} />

                    <Route path="/conventions" element={<Convention_Layout />}>
                    </Route>

                    <Route path="" element={<Event_Layout/>}>
                        <Route path = "/evented" element={<OpenEvent />}/> 
                    </Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;