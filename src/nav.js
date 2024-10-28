import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="navbar">
            <h1>Task Manager</h1>
            <div className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-button">
                    Filter By
                </button>
                {dropdownOpen && (
                    <div className="dropdown-content">
                        <a href="#">Category</a>
                        <a href="#">Status</a>
                        <a href="#">Priority</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
