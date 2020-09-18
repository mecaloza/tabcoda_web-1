import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function TopBar() {
  const [isBlink, setIsBlink] = useState(false);

  useEffect(() => {
    setInterval(() => blink(), 500);
  }, []);

  const blink = () => {
    setIsBlink((old_value) => !old_value);
  };

  return (
    <div className="topbar">
      <Link to="/home">
        <div className="logo">
          <img
            src={require(`./img/tabcoda_open.svg`)}
            height={100}
            className={"open_close2"}
          />
          {Array.from(Array(8).keys()).map((element, index) => (
            <img
              src={require(`./img/tabcoda_${index}.svg`)}
              height={100}
              className={"letters2"}
            />
          ))}
          <div className={isBlink ? "cursor_active2" : "cursor_inactive2"} />
          <img
            src={require(`./img/tabcoda_close.svg`)}
            height={100}
            className={"open_close2"}
          />
        </div>
      </Link>
      <div className="social_icons_container">
        <FontAwesomeIcon icon={faWhatsapp} className="social_icon" />
        {/* <FontAwesomeIcon icon={faGithub} className="social_icon" /> */}
        <a href="http://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} className="social_icon" />
        </a>
      </div>
    </div>
  );
}

export default TopBar;
