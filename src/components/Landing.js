import React from "react";
import Body from "./utils/Body";
import Nav from "./utils/Nav";

const Landing = () => {
  return (
    <div className="hero">
      <div className="main-width">
        <Nav />
        <Body />
      </div>
    </div>
  );
};

export default Landing;
