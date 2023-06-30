import { Link } from "react-router-dom";
import React from 'react'
import './Navabar.css'
const Navabar = ({ children }) => {
    return (
        <div className="loot">
            <div className="cont">
                <p className="app">CRM Application</p>
                <p >

                    <Link to="/home" id="home">Home</Link>
                </p>
                <p>
                    <Link to="/login" id="home1">Login</Link>
                </p>
                <p>
                    <Link to="/register" id="home2">Signup</Link>
                </p>
                <p>
                    <Link to="/contactpage" id="home2">Contact</Link>
                </p>
            </div>


            <div className='main-content'>
                {children}
            </div>
        </div>
    )
}

export default Navabar