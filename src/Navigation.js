import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    const navClass = isActive => {
        return isActive ? `font-bold` : '';
    };

    return (
        <div className={`flex justify-between mx-10 my-5`}>
            <h2>navigation</h2>
            <ul>
                <li className={`flex space-x-5`}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => navClass(isActive)}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/register"
                        className={({ isActive }) => navClass(isActive)}
                    >
                        Register
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) => navClass(isActive)}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/fetch"
                        className={({ isActive }) => navClass(isActive)}
                    >
                        Fetch Api
                    </NavLink>

                    <NavLink
                        to="/github-issues"
                        className={({ isActive }) => navClass(isActive)}
                    >
                        Github Issues
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
