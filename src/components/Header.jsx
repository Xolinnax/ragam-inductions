import React from "react";
import "./Header.css";
import Logo from "../svgs/Logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header()
{
    const navigate=useNavigate();

    function goHome()
    {
        navigate("/");
    }

    function goContact()
    {
        navigate("/contact");
    }

    return (<div className="header">
        <img onClick={goHome} className="logo" src={Logo} alt="Ragam Logo" />
        <div className="links">
            <p className="headerLink" onClick={goHome}>HOME</p>
            <p className="headerLink" onClick={goContact}>CONTACT US</p>
        </div>
    </div>)
}