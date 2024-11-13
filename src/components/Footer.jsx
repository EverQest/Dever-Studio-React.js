import React, { Fragment } from "react";
import Dever_logo_mini from '../source/DE.png';
import { Ads } from "./Ads.jsx";

export const Footer = () => {
    return (
        <Fragment>
          <footer>
          <div className="quote_footer">
            Дюжина
           <p className="pink">модних</p>
            речей, які ви заслужили!
           </div> 
      <div className="main_footer">
        <div className="container">
          <div className="el_list_footer">
            <ul className="el_ul_footer">
              <li><a href="/ts" className="el_footer">Футболки</a></li>
              <li><a href="/hoodie" className="el_footer">Худі</a></li>
              <li><a href="/pants" className="el_footer">Штани</a></li>
              <li><a href="/cap" className="el_footer">Кепки</a></li>
              <li><a href="/bag" className="el_footer">Рюкзаки</a></li>
              <li><a href="/souvenir" className="el_footer">Сувеніри</a></li>
              <li><a href="/faq" className="el_footer">Faq</a></li>
            </ul>
          </div>

          <div className="info_footer">
            <div className="logo_footer">
              <img src={Dever_logo_mini} alt="DE_logo" />
              <p>© 2024, Dever.com</p>
            </div>
            <div className="text_footer">
              <div>E-MAIL:</div>
              <div className="email_footer">dever@gmail.com</div>
              <div>ЧАС РОБОТИ СЛУЖБИ ПІДТРИМКИ:</div>
              <div>ПН-ЧТ: 9:00 - 21:00</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </Fragment>
    )
}