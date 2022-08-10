import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";


const Nav2 = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <header>
      <div className="logo">
      <i className="fa-solid fa-money-bill-transfer"></i>
      </div>

      <nav>
        <div className="hamb" onClick={() => setToggle(!toggle)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={toggle ? "nav-list" : "nav-list open"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li className="btn">
            <Link to={'/'}>logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav2;
