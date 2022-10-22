import React from 'react';
import Navigation from 'Navigation';
import {
    Route,
    Routes,
    useLocation,
    useParams,
    useRoutes,
} from 'react-router-dom';
import App from 'App';
import Weather from 'pages/Weather';
import Fetch from 'pages/Fetch';
import GithubIssue from 'pages/GithubIssue';
import Detail from 'component/githubIssues/Detail';
import Register from 'pages/Register';

function Root() {
    let noContainersRoute = ['/weather'];
    let path = useLocation().pathname;
    return (
        <div className="">
            <div>
                <Navigation />
            </div>
            <div className={`bg-gray-100 min-h-screen`}>
                {noContainersRoute.includes(path) ? (
                    <Routes>
                        <Route path="weather" element={<Weather />} />
                    </Routes>
                ) : (
                    <div className={`mx-auto max-w-7xl p-10`}>
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="register" element={<Register />} />
                            <Route path="fetch" element={<Fetch />} />
                            <Route
                                path="github-issues"
                                element={<GithubIssue />}
                            />
                            <Route
                                path="github-issues/:id"
                                element={<Detail />}
                            />
                            {/*path="/issues/:id*/}
                        </Routes>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Root;
