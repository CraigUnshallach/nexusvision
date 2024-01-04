import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation,  NavLink } from "react-router-dom";
import "./Root.css";

export default function Root() {
    const location = useLocation();


    return (
        <>
            <Header/>
            <main>
                {location.pathname === '/' && <div className="title-container">
                    <h1 className="title-h1"> WE ARE <br></br> NEXUSVISION</h1>
                    <p className="title-p">Empowering tomorrow's Visionaries: Where Software Development Meets Innovation.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <ul className="button-Navigation">
                        <li className='contact2-Button'><NavLink to="/contact">REQUESTS</NavLink></li>
                        <li className='contact3-Button'><NavLink to="/products">PRODUCTS</NavLink></li>

                    </ul>
                </div>}
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}