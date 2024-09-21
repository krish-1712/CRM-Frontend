import { Link } from "react-router-dom";
import React from 'react'
import './Navabar.css'
const Navabar = ({ children }) => {
    return (
        <div className="loot">
            <div className="cont">
                <div className="app">CRM Application</div>
                <p>
                    <Link to="/home" id="home">
                        <i className="fas fa-home"></i>
                    </Link>
                </p>
                <p>
                    <Link to="/login" id="home1" >
                        <i className="fas fa-sign-in-alt"></i>
                    </Link>
                </p>
                <p>
                    <Link to="/register" id="home2">
                        <i className="fas fa-user-plus"></i>
                    </Link>
                </p>
                <p>
                    <Link to="/contactpage" id="home2">
                        <i className="fas fa-envelope"></i>
                    </Link>
                </p>
            </div>


            <div className='main-content'>
                {children}
            </div>
        </div>
    )
}

export default Navabar



