import React from "react";
import "./components.css"

import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function Intro() {
    const navigate = useNavigate();
    return (
        <div>
            
            <img src={logo} alt="Logo"  className="h-80 m-auto" />
            <div className="Intro-text">
                <h1 className="text-5xl font-bold mb-6">Welcome to Vyapix</h1>
                <p className="text-lg mb-6 px-4">Your ultimate inventory management solution. Streamline your stock tracking, optimize operations, and boost productivity with StockSync.</p>
                <button className="btn" onClick={() => navigate("/signup")}>Get Started</button>
            </div>
          
        </div>
    );
}


export default Intro;
