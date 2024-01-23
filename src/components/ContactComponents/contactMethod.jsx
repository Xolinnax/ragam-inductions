import React from "react";
import "./contactMethod.css";

export default function ContactMethod(props)
{
    return (
    <a href={props.link}>
        <div className="contactMethod">
            <img className="contactMethodLogo" src={props.svg} alt="contact method logo" />
            <p className="contactMethodTitle">{props.method}</p>
            <p className="contactMethodDetails">{props.details}</p>
        </div>
    </a>);
}