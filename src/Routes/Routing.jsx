import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Completeprofile from '../Pages/Home/Completeprofile/Completeprofile';
import Activity from '../Pages/Activity/Activity';
import Not_Found from '../Pages/Not_Found/Not_Found';
import Convention_Layout from '../Layout/Convention_Layout/Convention_Layout';
import Conventions from '../Pages/Conventions/Conventions';

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/home/complete" element={<Completeprofile />} />
                        <Route path="/activity" element={<Activity />} />
                        {/* <Route path="/conventions" element={<Convention_Layout/>} /> */}
                        <Route path="/friends" element={<h2>Friends</h2>} />
                        <Route path="/profile" element={<h2>Conventions</h2>} />
                        <Route path="/settings" element={<h2>Settings</h2>} />

                        {/* Catch all routes */}

                    </Route>

                    <Route path="*" element={<Not_Found />} />

                    <Route element={<Convention_Layout />}>
                        <Route path="/conventions" element={<Conventions />} />
                    </Route>

                    {/* <Route path="conventions" element={<Convention_Layout />}>
                        
                    </Route> */}

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;