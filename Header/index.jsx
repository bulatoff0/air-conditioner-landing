import React from "react";
import { Navbar } from "../Navbar";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <img
          src="https://thumb.tildacdn.com/tild3130-3361-4239-b063-326438633265/-/format/webp/1.jpg"
          alt=""
        />
        <div className="header-container">
          <h1>Logo</h1>
          <p>
            Официальный дилер от завода приточно-вытяжной <br /> вентиляции
            Vallox и систем увлажнения Condair в Москве. <br /> Монтаж,
            проектирование и сервис в загородных домах и <br /> квартирах.
          </p>
        </div>
        <img className="arrow" src="/img/arrow.svg" alt="" />
      </div>
    </>
  );
};
