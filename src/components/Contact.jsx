import React from "react";
import ContactMethod from "./ContactComponents/contactMethod.jsx";
import Phone from "../svgs/Phone.svg";
import Location from "../svgs/Location.svg";
import Email from "../svgs/EmailLogo.svg";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact()
{
    return(
    <div className="contactContainer">
        <div className="contact">
            <motion.h1 className="contactTitle"
                initial={{opacity:0,x:-200}}
                animate={{opacity:1,x:0}}
                transition={{duration:1}}
            >
                Contact us
            </motion.h1>
            <div className="contactMethods">
                <motion.div
                    initial={{opacity:0,y:200}}
                    whileInView={{opacity:1,y:0}}
                    transition={{delay:0.8,duration:1}}
                >
                    <ContactMethod
                        link={"tel:+91 80757 27948"}
                        svg={Phone}
                        method={"BY PHONE"}
                        details={"+91 9994058168"}
                    />
                </motion.div>
                <motion.div
                    initial={{opacity:0,y:200}}
                    whileInView={{opacity:1,y:0}}
                    transition={{delay:1.6,duration:1}}
                >
                    <ContactMethod
                        link={"https://www.google.com/maps/place/NIT+Calicut+Campus/@11.3195427,75.9319419,15z/data=!4m2!3m1!1s0x0:0x491730b975583623?sa=X&ved=2ahUKEwiD7KnKhfSDAxUJwTgGHZyzAcIQ_BJ6BAhWEAA"}
                        svg={Location}
                        method={"FIND US"}
                        details={"National Institute of Technology Calicut, Kerala 673601"}
                    />
                </motion.div>
                <motion.div
                    initial={{opacity:0,y:200}}
                    whileInView={{opacity:1,y:0}}
                    transition={{delay:2.4,duration:1}}
                >
                    <ContactMethod
                        link={"mailto: contactus@nitc.ac.in"}
                        svg={Email}
                        method={"BY EMAIL"}
                        details={"contactus@nitc.ac.in"}
                    />
                </motion.div>
            </div>
        </div>
    </div>)
}