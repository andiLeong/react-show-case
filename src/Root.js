import React from 'react';
import Navigation from "Navigation";
import {Route, Routes} from "react-router-dom";
import App from "App";
import About from "pages/About";
import Contact from "pages/Contact";
import Fetch from "pages/Fetch";

function Root() {
    return (
        <div className="">
            <div>
                <Navigation/>
            </div>
            <header className="">
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="fetch" element={<Fetch />}/>
                </Routes>
            </header>
        </div>
    );
}

export default Root;