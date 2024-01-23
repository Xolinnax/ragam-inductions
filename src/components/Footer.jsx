import React from "react";
import NITCLogo from "../svgs/NITCLogo.svg";
import Logo from "../svgs/Logo.svg";
import Instagram from "../svgs/Instagram.svg";
import Twitter from "../svgs/Twitter.svg";
import YouTube from "../svgs/Youtube.svg";
import WhatsApp from "../svgs/WhatsApp.svg";
import "./Footer.css";

export default function Footer()
{
    return (
    <div className="footer">
        <div className="footerLogos">
            <img className="NITCLogo" src={NITCLogo} alt="NITC Logo" />
            <img className="RagamLogo" src={Logo} alt="Ragam Logo" />
        </div>
        <div className="socials">
            <a href="https://www.instagram.com/ragam_nitc/?hl=en">
            <img className="socialSVG" alt="Logo" src={Instagram} />
            </a>
            <a href="https://twitter.com/ragamnitc">
            <img className="socialSVG" alt="Logo" src={Twitter} />
            </a>
            <a href="https://www.youtube.com/@RagamNITC/videos">
            <img className="socialSVG" alt="Logo" src={YouTube} />
            </a>
            <a href="https://docs.google.com/document/d/1B1SDp_gxy-u4Ioexsv4-2JaJZ_brVTnQ1C7c3qwI7gY/edit?usp=sharing">
            <img className="socialSVG" alt="Logo" src={WhatsApp} />
            </a>
        </div>
        <div className="address">
            <p className="address-1">National Institute of Technology, Calicut</p>
            <p className="address-2">Calicut Mukkam Road, Kattangal</p>
            <p className="address-2">Kerala 673601</p>
        </div>
    </div>)
}