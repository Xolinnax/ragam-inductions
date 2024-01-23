import React from "react";
import "./About.css";
import AboutLogo from "../../svgs/AboutLogo.svg";
import { useRef } from "react";
import { motion , useInView } from "framer-motion";

export default function About()
{
    const ref=useRef(null);
    const isInView=useInView(ref, { once: true });

    return (<motion.div ref={ref} className="aboutContainer"
                style={{
                    transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "1s"
                }}
            >
        <div className="about">
            <img className="aboutSVG" src={AboutLogo} alt="About Section Logo" />
            <div className="aboutContent">
                <h2 className="aboutHeader">About us</h2>
                <p className="aboutDesc">The quick brown fox jumped over the lazy dog. Meanwhile, a gentle breeze rustled the leaves on the trees, creating a soothing melody. Birds chirped in the distance, adding to the natural symphony of the surroundings. As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility.</p>
                <p className="aboutDesc">As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility. In this serene moment, one could appreciate the beauty of nature and the simplicity of life.</p>
            </div>
        </div>
    </motion.div>)
}