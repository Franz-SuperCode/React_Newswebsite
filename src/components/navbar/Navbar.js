import "./Navbar.css"
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {

    {/* <Link to="/">Home</Link> */ }

    return (
        <nav>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/blog">Blog</Link></p>
            <p><Link to="/details">Details</Link></p>
        </nav>
    )
}


export default Navbar;
