import React, { Fragment } from "react";
import Dever_logo from '../source/DEVER.png';

export const Navbar = () => {
  return (
    <Fragment>
      <header>
        <div className="header_first">
          <div className="header_main_logo">
            <a href="/"
              ><img src={Dever_logo} alt="logo_mini_black"
            /></a>
          </div>
        </div>
        <div className="header_second">
          <ul className="header_main">
            <li><a href="/ts" className="header_main_item">Футболки</a></li>
            <li><a href="/hoodie" className="header_main_item">Худі</a></li>
            <li><a href="/pants" className="header_main_item">Штани</a></li>
            <li><a href="/cap" className="header_main_item">Кепки</a></li>
            <li><a href="/bag" className="header_main_item">Рюкзаки</a></li>
            <li><a href="/souvenir" className="header_main_item">Сувеніри</a></li>
            <li><a href="/faq" className="header_main_item">Faq</a></li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};
