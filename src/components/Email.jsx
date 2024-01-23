import React from "react";
import "./Email.css";
import EmailLogo from "../svgs/EmailLogo.svg";

export default function Email()
{
    return (
    <a href="mailto: contactus@nitc.ac.in">
        <div className="email">
            <img className="emailLogo" src={EmailLogo} alt="Email Logo" />
            <p className="emailText">EMAIL</p>
            <p className="contactEmail">contactus@nitc.ac.in</p>
        </div>
    </a>);
};