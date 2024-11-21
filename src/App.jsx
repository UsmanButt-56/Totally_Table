import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Activity from './Pages/Activity/Activity';
import Home from './Pages/Home/Home';
function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/activity" element={<Activity/>}/>
            <Route path = "/conventions" element={<h2>Conventions</h2>} />
            <Route path = "/friends" element={<h2>Friends</h2>} />
            <Route path = "/profile" element={<h2>Conventions</h2>} />
            <Route path = "/settings" element={<h2>Settings</h2>} />
            {/* <Route path = "/profile" element={<Activity/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App;
