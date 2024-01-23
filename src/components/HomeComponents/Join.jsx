import React from "react";
import Email from "../Email.jsx";
import "./Join.css";
import { useRef } from "react";
import { motion , useInView } from "framer-motion";

export default function Join()
{
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    return (
    <motion.div ref={ref} className="joinContainer"
        style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "1s"
                }}
    >
        <div className="join">
            <div className="joinContent">
                <h2 className="joinHeader">Join us</h2>
                <p className="joinDesc">Embark on a journey with us and become part of a vibrant tech team, where innovation meets collaboration. Join us and contribute to something extraordinary!</p>
                <pre className="joinList">
                    1. Invaluable experience{"\n"}
                    2. Work with the latest technologies and frameworks{"\n"}
                    3. Collaborate with others{"\n"}
                    4. Be part of the biggest cultural fest of South India{"\n"}
                </pre>
            </div>
            <div className="emailContainer">
                <Email />
            </div>
        </div>
    </motion.div>)
}