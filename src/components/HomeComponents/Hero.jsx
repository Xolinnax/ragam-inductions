import React from "react";
import HeroLogo from "../../svgs/HeroLogo.svg";
import ExploreArrow from "../../svgs/ExploreArrow.svg";
import "./Hero.css"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Hero()
{
    const ref=useRef(null);
    const isInView=useInView(ref, { once: true });

    return (<motion.div className="heroContainer" ref={ref}
                style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "1s"
                }}
            >
            <div className="hero">
                <div className="heroContent">
                    <pre className="heroContentHeader">Ragam ‘24 Tech-Team {"\n"}Inductions</pre>
                    <p className="heroContentDesc">Embrace the challenges that lie ahead, as you become part of a community dedicated to pushing boundaries and shaping the fest. </p>
                    <a href="https://docs.google.com/document/d/1B1SDp_gxy-u4Ioexsv4-2JaJZ_brVTnQ1C7c3qwI7gY/edit#heading=h.oaedulc7e443">
                        <div className="buttonContainer">
                            <motion.button className="exploreButton"
                                whileHover={{rotate:-2,scale:1.05}}
                                whileTap={{rotate:0,scale:0.95}}
                            >
                                Explore<img className="exploreArrow" src={ExploreArrow} alt="Explore Arrow" />
                            </motion.button>
                        </div>
                    </a>
                </div>
                <div className="heroLogo">
                    <img className="heroLogoSVG" src={HeroLogo} alt="Hero Logo" />
                </div>
            </div>
        </motion.div>)
}