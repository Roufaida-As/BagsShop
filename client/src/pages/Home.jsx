/* eslint-disable no-unused-vars */
import React from "react";
import HomeBody from "../components/HomeBody/HomeBody";
import Items from "../components/items/Items";
import Footer from "../components/Footer/Footer";


const Home = () => {
    return (
        <div>
            <HomeBody />
            <Items />
            <Footer />
        </div>
    );
}

export default Home;