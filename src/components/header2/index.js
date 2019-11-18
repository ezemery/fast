import React, { useState, useEffect } from "react";
import "./style.scss";
import Logo from "../../assets/img/logo_white.png";
import GrayLogo from "../../assets/img/logo_gray.png";
import { Link } from "react-router-dom";

function Header2(props) {
  let { type, buttonName, hasSubmenu, setup } = props;
  const [top, setTop] = useState("");
  useEffect(() => {
    const eventHandler = e => {
      window.pageYOffset > 0 ? setTop("scroll") : setTop("");
    };
    window.addEventListener("touchmove", eventHandler);
    return () => {
      window.removeEventListener("touchmove", eventHandler);
    };
  }, []);
  useEffect(() => {
    const eventHandler = e => {
      window.pageYOffset > 0 ? setTop("scroll") : setTop("");
    };
    window.addEventListener("scroll", eventHandler);
    return () => {
      window.removeEventListener("scroll", eventHandler);
    };
  }, []);
  return (
    <div
      className={`header2 ${top} ${hasSubmenu ? "scroll-desktop" : ""}`}
      style={{
        background: type === "gray" ? "#363636" : "white",
        color: type === "gray" ? "white" : "#363636"
      }}
    >
      <div className={"header2-container"}>
        <img
          className={"header2-logo"}
          src={type === "gray" ? Logo : GrayLogo}
          alt="gray logo"
        />
        <div className={type === "gray" ? "header2-menu gray" : "header2-menu"}>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/developers">Company</Link>
          <Link to="/platform">For Business</Link>
          <Link to="/faq">Help</Link>
        </div>
        <div
          className={setup ? "header2-button setup" : "header2-button"}
          style={{
            background: type === "gray" ? "white" : "#363636",
            color: type === "gray" ? "#363636" : "white"
          }}
        >
          <div className="m-auto">{buttonName}</div>
        </div>

        <div
          className={type === "gray" ? "burger-button gray" : "burger-button"}
        ></div>
      </div>
    </div>
  );
}

export default Header2;
