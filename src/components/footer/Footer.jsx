import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div class="footer">
        <div class="box">
            <div class="explore">
                <h3>Explore the news</h3>
                <h4>Sport</h4>
                <h4>Travel</h4>
                <h4>Future</h4>
            </div>
            <div class="contacts">
                <h3>Contacts Us</h3>
                <h4>Phone: +996997300930</h4>
                <h4>Email: iskakovkuttuubaj0207@gmail.com</h4>
                <h4>Address: Kyrgyzstan, Bishkek, Ahunbaeva street, 125a</h4>
            </div>

            <div class="social-icons">
            <FaFacebook />
            <FaSquareInstagram/>
            </div>
        </div>
    </div>
        </div>
    )
    }
    
export default Footer;