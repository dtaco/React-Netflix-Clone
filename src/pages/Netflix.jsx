import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai"

export default function Netflix(props) {
    
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset===0?false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div> 
            <Navbar isScrolled={isScrolled} />
            <div className="hero">
                <img 
                    src={backgroundImage} 
                    alt="background" 
                    className="background-image" 
                />
                <div className="container">
                    <div className="logo">
                        <img src={MovieLogo} alt="Movie Logo" />
                    </div>
                    <div className="buttons flex">
                        <button className="flex j-center a-center">
                            <FaPlay /> Play
                        </button>
                        <button className="flex j-center a-center">
                            <AiOutlineInfoCircle /> More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
