import React from "react";
import "./Navbar.scss";
import { NavList } from "./NavList";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-row">
        <div className="nav-logo">Logo</div>
        <ul className="nav-list">
          <NavList />
        </ul>
        <button>Оставить заявку</button>
      </div>
    </nav>
  );
};
