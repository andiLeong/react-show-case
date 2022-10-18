import React from 'react';
import Navigation from "Navigation";
import {Route, Routes} from "react-router-dom";
import App from "App";
import About from "pages/About";
import Contact from "pages/Contact";
import Fetch from "pages/Fetch";
import GithubIssue from "component/GithubIssue";

function Root() {
    return (
        <div className="">
            <div>
                <Navigation/>
            </div>
            <div className={`bg-gray-100 min-h-screen`}>
                <div className={`mx-auto max-w-7xl p-10`}>
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="fetch" element={<Fetch/>}/>
                        <Route path="github-issues" element={<GithubIssue />}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Root;