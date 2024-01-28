import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/Session/SessionSlice"
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import Logo from './nexusvision2.png';

// This function represents the header
export default function Header () {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }

  return (
    <div className="main-header">
      <div className="logo_container">
        <span className="logo-helper"></span>
        <Link to={"/"}><img src={Logo} className="header-img" alt="Header" /></Link>
      </div>
      <nav className={`top-Navigation ${scrolling ? 'scrolled' : ''}`}>
        <ul className={`left-items ${scrolling ? 'scrolled' : ''}`}>
          <li><NavLink to="/news">News</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/jobs">Jobs</NavLink></li>
          <li><NavLink to="/partner">Partner</NavLink></li>
        </ul>
        <ul className="right-items">
          <li className={`contact-Button ${scrolling ? 'scrolled' : ''}`}><NavLink to="/contact">CONTACT</NavLink></li>

        </ul>
        {
          currentUser.username
            ? <>
                <NavLink to="/">Profile</NavLink>
                <button onClick={handleLogout} className="logout"> LogOut </button>
              </>
            : <NavLink to="/">SignUp</NavLink>
          }
      </nav>
    </div>
  )
}
