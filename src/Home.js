import React, { useState, useEffect } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faClipboard,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useCycle, AnimatePresence, useAnimation } from "framer-motion";
import TopBar from "./TopBar";
import useWindowDimensions from "./dimensions";
import { useHistory, Link } from "react-router-dom";

function Home() {
  const history = useHistory();
  

  const [animation, cycleAnimation] = useCycle("", "animatecel");
  const [animateCel, setAnimateCel] = useState({});

  const { height, width } = useWindowDimensions();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const iconVariants = {
    animatecel: {
      scale: 50,
      originX: 1,
      originY: 0.5,
      transition: {
        duration: 2,
      },
    },

    fillcel: {
      height: 104.3,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 250,
        damping: 13,
      },
    },
  };

  const control_click_cel = useAnimation();
  const control_fill_cell = useAnimation();

  const clickCel = async (event, info) => {
    await control_fill_cell.start("fillcel");
    await control_click_cel.start("animatecel");
    return history.push("/mobile");
  };

  

  return (
    <motion.div
      className="home_container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{}}
    >

      <div className="calc_height">
        <TopBar />
        <div className="subcontainer_width">
          <div className="services_container">
            <div className="service_title">
              <h4 className="home_title">CREAMOS TUS IDEAS</h4>
            </div>
            <div className="services_icons_container">
              <motion.div
                className="service_icon_container"
                whileHover={{ scale: 1.05 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 82.3 150"
                  xmlSpace="preserve"
                  enable-background="new 0 0 82.3 150"
                  height="150px"
                  width="150px"
                  onTap={(event, info) => clickCel(event, info)}
                  variants={iconVariants}
                  animate={control_click_cel}
                  style={{
                    originX: 0.5,
                    originY: 0.5,
                  }}
                >
                  <g>
                    <path
                      id="_x3C_content_x3E_"
                      class="st0"
                      d="M66.6 0H15.9C7.3 0 0 7 0 15.6v118.8C0 143 7.2 150 15.8 150l50.8-0.1c8.6 0 15.7-7 15.7-15.6l0.1-118.7C82.3 7 75.3 0 66.6 0zM34 9.4h14.7c1.3 0 2.4 1 2.4 2.4s-1 2.4-2.4 2.4H33.9c-1.3 0-2.4-1-2.4-2.4C31.6 10.4 32.6 9.4 34 9.4zM25.1 10.1c0.9-0.9 2.4-0.9 3.3 0 0.4 0.4 0.7 1 0.7 1.7 0 0.6-0.3 1.2-0.7 1.6 -0.4 0.4-1 0.7-1.6 0.7 -0.6 0-1.2-0.3-1.7-0.7 -0.4-0.4-0.7-1-0.7-1.6C24.4 11.2 24.7 10.5 25.1 10.1zM40.8 145.4c-3.9 0-7-3.2-7-7 0-3.9 3.2-7 7-7s7 3.2 7 7S44.7 145.4 40.8 145.4zM75 126.6H8.2V22.3H75V126.6L75 126.6z"
                      fill="#fff"
                    />
                    <motion.rect
                      x="8.2"
                      y="22.3"
                      class="st1"
                      width="66.8"
                      height="104.3"
                      fill="#20fc00"
                      variants={iconVariants}
                      initial={{ height: 0 }}
                      animate={control_fill_cell}
                      style={{ originX: 0.5, originY: 0.5 }}
                    ></motion.rect>
                  </g>
                </motion.svg>

                <p className="subtitle_menu">Aplicaciones Móviles</p>
              </motion.div>
              <motion.div
                className="service_icon_container"
                whileHover={{ scale: 1.05 }}
                className="service_icon_container"
                onClick={() => {
                  history.push("/WebApp");
                }}
              >
                <motion.img src={require("./img/ui.svg")} height={"150px"} onClick={() => {
                        return history.push("/WebApp")
                      }}/>
                <p className="subtitle_menu">Aplicaciones Web</p>
              </motion.div>
              <motion.div
                className="service_icon_container"
                whileHover={{ scale: 1.05 }}
                className="service_icon_container"
              >
                <img src={require("./img/automation.svg")} height={"150px"}
              onClick={() => {
                return history.push("/DesktopApp") }}/>
                <p className="subtitle_menu">Automatización</p>
              </motion.div>
            </div>
          </div>
        </div>
        <div>
          <div className="button_business_section">
            <Link style={{ textDecoration: "none" }} to="/business">
              <motion.div
                className="button_business_container"
                whileHover={{
                  boxShadow: "0px 0px 24px -8px rgba(255,255,255,1)",
                }}
              >
                <p className="button_business_txt">Hablemos de Negocios</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer_container">
        <div className="footer_container_txt">
          <p style={{ fontWeight: "bold" }}>
            Tabcoda | 2020 | © All Rights Reserverd
          </p>
          <div
            style={{
              display: "flex",
              marginTop: "13px",
              marginBottom: "5px",
            }}
          >
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              color="white"
              className="icon_footer"
            />
            <p>Cra 48c No.66 - 26 , Medellin, Colombia</p>
          </div>
          <div style={{ display: "flex", marginBottom: "5px" }}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              color="white"
              className="icon_footer"
            />

            <p>3117903630 - 3105951281</p>
          </div>

          <div style={{ display: "flex", marginBottom: "5px" }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              color="white"
              className="icon_footer"
            />

            <p>info@tabcoda.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
