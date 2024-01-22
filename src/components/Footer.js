import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./nexusvision2.png"
import "./Footer.css"
import { NavLink, Link } from "react-router-dom";

export default function Footer() {


  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    
  }

  const goForward = () => {
    navigate(1);
  }

  return (
    <footer>
      <div className="footer-background">
        <div className="footer-container">
        <Link to={"/"}><img src={Logo} className="footer-img" alt="Footer-Logo"/></Link>
          <p className="contact-info"> NexusVision GmbH 
          <br></br>
          <br></br> 
          <br></br>Warburgerstrasse 100, 33100 Paderborn 
          <br></br> Tel: +49 5251 0011 2
          <br></br> info@nexusvision.de</p>
          <ul className="button-container-footer">
            <li className='contact4-Button'><NavLink to="/contact">CONTACT US</NavLink></li>
          </ul>
        </div>
        <div className="footer-container2">
          <p className="contact-info2"> Copyright © 2024 NexusVision GmbH, Inc. All rights reserved.</p>
          <div className="contact-info-container">
            <p className="contact-info2"> Terms & Policies </p>
            <p className="contact-info3"> |  </p>
            <p className="contact-info2"> Terms of Use </p>
            <p className="contact-info3"> |  </p>
            <p className="contact-info2"> Privacy Policy </p>
            <p className="contact-info3"> |  </p>
            <p className="contact-info2"> Subscription Center </p>
            <p className="contact-info3"> |  </p>
            <p className="contact-info2"> Trademarks </p>

          </div>
          
        </div>
      </div>
    </footer>
  );
}

//<button onClick={goBack}>Back</button>
//<button onClick={goForward}>Forward</button>