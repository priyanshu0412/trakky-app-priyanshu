import React from "react";
import { NavLink } from "react-router-dom";

// ------------------------------------

const Navbar = () => {
    return (
        <div className="w-full  h-[80px] flex justify-center items-center bg-gray-100 shadow-md">
            <div className="flex max-w-[1200px] w-full justify-between px-6">
                <NavLink
                    to="/task1"
                    className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }
                >
                    Task 1
                </NavLink>

                <NavLink
                    to="/task2"
                    className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }
                >
                    Task 2
                </NavLink>

                <NavLink
                    to="/task3"
                    className={({ isActive }) =>
                        isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                    }
                >
                    Task 3
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
