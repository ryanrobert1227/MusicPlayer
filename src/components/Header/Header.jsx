import React from "react";

import logo from "../../assets/logo.svg";
import myImage from "../../assets/profile.jpg";

import "./style.css";

export default function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="" />
        <h1>
          <img src={myImage} alt="" />
        </h1>
      </header>
    </>
  );
}
