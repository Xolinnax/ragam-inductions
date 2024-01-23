import React from "react";
import "./Header.css";
import Logo from "../svgs/Logo.svg";

export default function Header()
{
    return (<div className="header">
        <a href="/"><img className="logo" src={Logo} alt="Ragam Logo" /></a>
        <div className="links">
            <a className="headerLink" href="/">HOME</a>
            <a className="headerLink" href="/contact">CONTACT US</a>
        </div>
    </div>)
}