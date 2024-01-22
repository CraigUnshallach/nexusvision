import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation,  NavLink } from "react-router-dom";
import "./Root.css";
import Blueprint from './blueprint.png';
import Blueprint2 from './blueprint2.png';
import Blueprint3 from './blueprint3.png';
import Blueprint4 from './blueprint4.png';

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
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="image-container">
                        <img src={Blueprint} className="blueprint-img" alt="Blueprint"/>
                        <img src={Blueprint2} className="blueprint2-img" alt="Blueprint"/>
                        <img src={Blueprint4} className="blueprint2-img" alt="Blueprint"/>
                        <img src={Blueprint3} className="blueprint2-img" alt="Blueprint"/>
                    </div>
                    
                    <div className="mission-container">
                    <h2 className="title-h2"> OUR MISSION</h2>
                    <p className="title-p">Empowering Futures through Innovative Software Solutions.
                    At NexusVision, our mission is to harness cutting-edge technology and creativity to develop transformative software, 
                    including engaging experiences like our flagship game 'Dogs'. We aspire to create a digital realm where imagination meets functionality, enriching lives and leaving a lasting impact on the world of software development. <br></br><br></br>
                    Follow our Journey!</p>
                    </div>
                </div>}
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}