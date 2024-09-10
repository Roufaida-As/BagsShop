import React from "react";
import './HomeBody.css'
import homeright from "../Asserts/homeright.png"

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
                <button><a style={{textDecoration : 'none', color: 'white'}}  >Shop Now</a></button>
            </div>
           

        
        </div>
    );
}

export default HomeBody;