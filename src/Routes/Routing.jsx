import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Completeprofile from '../Pages/Home/Completeprofile/Completeprofile';
import Activity from '../Pages/Activity/Activity';
import Not_Found from '../Pages/Not_Found/Not_Found';
import Convention_Layout from '../Layout/Convention_Layout/Convention_Layout';
import Event_Layout from '../Layout/Event_Layout/Event_Layout';
import OpenEvent from '../Pages/Conventions/OpenEvent/OpenEvent';
import Friends from '../Pages/Friends/Friends';
import Profile from '../Pages/Profile/Profile';
import Settings from '../Pages/Settings/Settings';
import Profile_Layout from '../Layout/Profile_Layout/Profile_Layout';
import Footer_Layout from '../Layout/Footer_Layout/Footer_Layout';
import Feedback from '../Pages/Footer_Pages/Feedback/Feedback';
import Contact from '../Pages/Footer_Pages/Contact/Contact';
import Notification from '../Pages/Notification/Notification';
import Email from '../Pages/Message/Email';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Sign In */}
                    <Route path="/" element={<SignIn />}></Route>

                    {/* Sign Up */}
                    <Route path="/sign_up" element={<SignUp />}></Route>
                      
                    {/*  */}
                    <Route element={<Layout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/home/complete" element={<Completeprofile />} />
                        <Route path="/activity" element={<Activity />} />
                        <Route path="/friends" element={<Friends />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                        {/* Catch all routes */}
                    </Route>

                    {/* Not Found */}
                    <Route path="*" element={<Not_Found />} />

                    <Route path="/conventions" element={<Convention_Layout />}>
                     
                    </Route>

                    <Route element={<Event_Layout/>}>
                        <Route path = "/evented" element={<OpenEvent />}/> 
                    </Route>

                    <Route path="/profile/edit" element={<Profile_Layout/>}>
                         
                    </Route>

                    <Route  element={<Footer_Layout/>}>
                       <Route path="/feedback" element={<Feedback />}></Route>
                       <Route path="/contact" element={<Contact />}></Route>
                       <Route path="/notification" element={<Notification />}></Route>
                       <Route path="/message" element={<Email />}></Route>
                    </Route>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;