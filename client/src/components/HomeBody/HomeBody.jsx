import React from "react";
import './HomeBody.css'
import homeright from "../Asserts/homeright.jpeg"
import { Link as ScrollLink } from "react-scroll";

const HomeBody = () => {
    return (
        <div className="Home_body">
            <div className="Home-left">
                <img src={homeright} alt="" />
            </div>
            <div className="Home-right">

                <h1>Elegance, Quality,You</h1>
                <p>Explore our collection of high-quality, elegantly
                    crafted bags with a feminine touch. From chic
                    handbags to versatile totes, each piece is designed
                    for durability and style, perfect for any occasion
                </p>
                <ScrollLink
                    to="collections"
                    smooth={true}
                    duration={500}
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <button>Shop Now</button>
                </ScrollLink>
            </div>



        </div>
    );
}

export default HomeBody;