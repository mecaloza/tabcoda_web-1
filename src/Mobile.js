import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
  useElementScroll,
} from "framer-motion";
import "./Mobile.css";
import TopBar from "./TopBar";
import useWindowDimensions from "./dimensions";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";

function Mobile() {
  const { height, width } = useWindowDimensions();
  const history = useHistory();

  //UX LABEL ANIMATION

  const [ref_ux, inView_ux, entry] = useInView({
    threshold: 0.99,
    rootMargin: "-30% 0%",
  });
  const [ref_ux_cont, inView_ux_cont] = useInView({
    threshold: 0,
  });

  const controls_popup_txt = useAnimation();
  const controls_popup_square = useAnimation();

  const activePopup_ux = async () => {
    await controls_popup_square.start("visible_square");
    return controls_popup_txt.start("visible_txt");
  };

  const closePopup_ux = () => {
    controls_popup_square.start("hidden");
    controls_popup_txt.start("hidden_txt");
  };

  useEffect(() => {
    if (inView_ux) {
      activePopup_ux();
    }
  }, [inView_ux]);

  useEffect(() => {
    if (!inView_ux_cont) {
      closePopup_ux();
    }
  }, [inView_ux_cont]);

  //UI LABEL ANIMATION

  const [ref_ui, inView_ui] = useInView({
    threshold: 0.99,
    rootMargin: "-18% 0%",
  });
  const [ref_ui_cont, inView_ui_cont] = useInView({
    threshold: 0,
  });

  const controls_popup_txt_ui = useAnimation();
  const controls_popup_square_ui = useAnimation();

  const activePopup_ui = async () => {
    await controls_popup_square_ui.start("visible_square");
    return controls_popup_txt_ui.start("visible_txt");
  };

  const closePopup_ui = () => {
    controls_popup_square_ui.start("hidden");
    controls_popup_txt_ui.start("hidden_txt");
  };

  useEffect(() => {
    if (inView_ui) {
      activePopup_ui();
    }
  }, [inView_ui]);

  useEffect(() => {
    if (!inView_ui_cont) {
      closePopup_ui();
    }
  }, [inView_ui_cont]);

  const initContainerVariants = {
    visible: {
      height: `${height >= width ? "100vh" : "100vw"}`,
      width: `${height >= width ? "100vh" : "100vw"}`,
    },
    hidden: {
      height: 0,
      width: 0,
      borderRadius: "100%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  //ANIMATION VARIANTS

  const popup_squareVariants = {
    hidden: {
      height: 0,
      transition: { duration: 0.2 },
    },

    visible_square: {
      height: "3rem",
      transition: { duration: 0.1, type: "linear" },
    },
  };

  const popup_txtVariants = {
    hidden_txt: {
      y: "12rem",
    },

    visible_txt: {
      y: "3rem",
      position: "relative",
      zIndex: 1.3,
      transition: {
        zIndex: { delay: 0.5 },

        duration: 2,
        type: "spring",
        damping: 5,
        stiffness: 70,
      },
    },
  };

  return (
    <motion.div className="mobile_container" exit={{}}>
      <motion.div
        variants={initContainerVariants}
        initial="visible"
        animate="hidden"
        className="circle_init"
      ></motion.div>
      <TopBar />

      <div
        className={`svg_cel_container  ${
          isMobile ? "svg_Onmobile" : "svg_Onpc"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134.1 265.65">
          <title>mobile</title>
          <rect
            x="2.15"
            y="0.5"
            width="129.88"
            height="264.65"
            rx="21.71"
            fill="#c1c1c1"
            id="border"
          />
          <rect
            x="2.15"
            y="0.5"
            width="129.88"
            height="264.65"
            rx="21.71"
            fill="none"
            stroke="#000"
            stroke-miterlimit="10"
          />
          <path
            d="M76.68 264.67c0-1.05-1.33-1.89-3-1.89H63.5c-1.64 0-3 0.88-3 1.89v0.87H76.71Z"
            transform="translate(0)"
          />
          <path
            d="M132.43 54.5h0a1.44 1.44 0 0 1 1.42 1.42V87.63a1.44 1.44 0 0 1-2.88 0V56a1.43 1.43 0 0 1 1.41-1.45h0.05Z"
            transform="translate(0)"
            fill="#0076c6"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M1.69 56.57h0A1.44 1.44 0 0 1 3.11 58V72.28a1.43 1.43 0 0 1-2.85 0V58a1.44 1.44 0 0 1 1.42-1.42Z"
            transform="translate(0)"
            fill="#0076c6"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M1.69 78.22h0a1.43 1.43 0 0 1 1.42 1.42V93.93a1.43 1.43 0 0 1-2.85 0V79.64a1.43 1.43 0 0 1 1.42-1.42Z"
            transform="translate(0)"
            fill="#0076c6"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M1.69 34.38h0A1.44 1.44 0 0 1 3.11 35.8V45a1.42 1.42 0 0 1-1.29 1.54h0A1.42 1.42 0 0 1 0.26 45.28h0a1 1 0 0 1 0-0.24V35.8a1.44 1.44 0 0 1 1.42-1.42Z"
            transform="translate(0)"
            fill="#0076c6"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <rect
            x="6.8"
            y="2.93"
            width="120.6"
            height="259.13"
            rx="17.6"
            fill="#000000"
            id="content"
          />
          {/* ////////////////////////////////////////////////////////////////////////// */}

          <path
            d="M24.45 2.4h85.4A17.63 17.63 0 0 1 127.45 20V243.9a17.63 17.63 0 0 1-17.6 17.6H24.45a17.63 17.63 0 0 1-17.6-17.6V20A17.63 17.63 0 0 1 24.45 2.4Z"
            fill="#eaeaea"
          />
          <path
            d="M125.85 61.3a36.7 36.7 0 1 0 0 73.4h1.6V61.3Z"
            fill="#2a10c4"
          />
          <path
            d="M16.35 30a36.91 36.91 0 0 0-9.5 1.2v70.9a36.91 36.91 0 0 0 9.5 1.2 36.65 36.65 0 1 0 0-73.3Z"
            fill="#3e00ff"
          />
          <path
            d="M16.35 134.7a36.91 36.91 0 0 0-9.5 1.2v70.9a36.91 36.91 0 0 0 9.5 1.2 36.65 36.65 0 1 0 0-73.3Z"
            fill="#3d15ba"
          />
          <g isolation="isolate">
            <text
              transform="translate(8.9 63.09)"
              font-size="8"
              fill="#fff"
              font-family="Bangers-Regular, Bangers"
              isolation="isolate"
            >
              Wireframing
            </text>
            <text
              transform="translate(8.9 63.09)"
              font-size="8"
              fill="none"
              stroke="#2b2b2b"
              stroke-miterlimit="10"
              stroke-width="0.25"
              font-family="Bangers-Regular, Bangers"
              isolation="isolate"
            >
              Wireframing
            </text>
            <text
              transform="translate(8.9 72.69)"
              font-size="8"
              fill="#fff"
              font-family="Bangers-Regular, Bangers"
              isolation="isolate"
            >
              (borrador)
            </text>
            <text
              transform="translate(8.9 72.69)"
              font-size="8"
              fill="none"
              stroke="#2b2b2b"
              stroke-miterlimit="10"
              stroke-width="0.25"
              font-family="Bangers-Regular, Bangers"
              isolation="isolate"
            >
              (borrador)
            </text>
          </g>
          <g isolation="isolate">
            <text
              transform="translate(8.78 170.11)"
              font-size="8"
              fill="#fff"
              font-family="Bangers-Regular, Bangers"
              isolation="isolate"
            >
              A
              <tspan x="3.46" y="0" letter-spacing="-0.02em">
                R
              </tspan>
              <tspan x="6.82" y="0" letter-spacing="-0.01em">
                Q
              </tspan>
              <tspan x="10.98" y="0">
                U
              </tspan>
              <tspan x="14.33" y="0" letter-spacing="-0.01em">
                I
              </tspan>
              <tspan x="15.89" y="0" letter-spacing="0em">
                T
              </tspan>
              <tspan x="18.78" y="0" letter-spacing="-0.01em">
                E
              </tspan>
              <tspan x="21.46" y="0">
                CTURA
              </tspan>
            </text>
            <text
              transform="translate(8.78 170.11)"
              font-size="8"
              fill="none"
              stroke="#2b2b2b"
              stroke-miterlimit="10"
              stroke-width="0.25"
              font-family="Bangers-Regular, Bangers"
              isolation="isolate"
            >
              A
              <tspan x="3.46" y="0" letter-spacing="-0.02em">
                R
              </tspan>
              <tspan x="6.82" y="0" letter-spacing="-0.01em">
                Q
              </tspan>
              <tspan x="10.98" y="0">
                U
              </tspan>
              <tspan x="14.33" y="0" letter-spacing="-0.01em">
                I
              </tspan>
              <tspan x="15.89" y="0" letter-spacing="0em">
                T
              </tspan>
              <tspan x="18.78" y="0" letter-spacing="-0.01em">
                E
              </tspan>
              <tspan x="21.46" y="0">
                CTURA
              </tspan>
            </text>
            <text
              transform="translate(23.18 179.71)"
              font-size="8"
              fill="#fff"
              font-family="Bangers-Regular, Bangers"
              isolation="isolate"
            >
              APP
            </text>
            <text
              transform="translate(23.18 179.71)"
              font-size="8"
              fill="none"
              stroke="#2b2b2b"
              stroke-miterlimit="10"
              stroke-width="0.25"
              font-family="Bangers-Regular, Bangers"
              isolation="isolate"
            >
              APP
            </text>
          </g>
          <text
            transform="translate(94.77 101.07)"
            font-size="11.42"
            fill="#fff"
            font-family="Bangers-Regular, Bangers"
            isolation="isolate"
          >
            DiSEÑO
          </text>
          <text
            transform="translate(94.77 101.07)"
            font-size="11.42"
            fill="none"
            stroke="#2b2b2b"
            stroke-miterlimit="10"
            stroke-width="0.25"
            font-family="Bangers-Regular, Bangers"
            isolation="isolate"
          >
            DiSEÑO
          </text>
          <path
            d="M48.55 46.1l43.1 8.5s14.1 3-1.8 8.5l-22.1 8.6S43 81.2 65.45 90.8 88 100.3 88 100.3"
            fill="none"
            stroke="#2b2b2b"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
            stroke-dasharray="3 4"
          />
          <path
            d="M89 100.1a30 30 0 0 1-6.8-7l0.3 5.1-3 4A29.88 29.88 0 0 1 89 100.1Z"
            fill="#2b2b2b"
          />
          <path
            d="M52 177.8a30 30 0 0 1 6.3 7.5l0.1-5.1 3.3-3.8A33.94 33.94 0 0 1 52 177.8Z"
            fill="#2b2b2b"
          />
          <path
            d="M118.65 135.5s21.2 59.4-61.7 45.3"
            fill="none"
            stroke="#2b2b2b"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
            stroke-dasharray="3 4"
          />
          <circle
            cx="69.75"
            cy="232.8"
            r="27.4"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-dasharray="0 4"
          />
          <line
            x1="68.65"
            y1="205.5"
            x2="68.65"
            y2="260.2"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <line
            x1="42.45"
            y1="232.8"
            x2="97.15"
            y2="232.8"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="0.5"
          />
          <path
            d="M76.55 245.8H61.05a6.7 6.7 0 0 1-6.7-6.7V223.5a6.7 6.7 0 0 1 6.7-6.7h15.5a6.7 6.7 0 0 1 6.7 6.7V239A6.79 6.79 0 0 1 76.55 245.8Z"
            fill="#2b00ff"
          />
          <text
            transform="translate(61.96 240.18)"
            font-size="21.1"
            fill="#fff"
            font-family="Bangers-Regular, Bangers"
            isolation="isolate"
          >
            !!
          </text>
          <text
            transform="translate(61.96 240.18)"
            font-size="21.1"
            fill="none"
            stroke="#2b2b2b"
            stroke-miterlimit="10"
            stroke-width="0.25"
            font-family="Bangers-Regular, Bangers"
            isolation="isolate"
          >
            !!
          </text>
          {/* ///////////////////////////////////////////////// */}
          <motion.g
            animate={{ rotate: [-20, 0, 20, 0, -20] }}
            transition={{ duration: 5, loop: "Infinity", ease: "linear" }}
          >
            <motion.circle
              cx="67.04"
              cy="131.65"
              r="6.83"
              fill="#fff"
              animate={{ y: [0, -2], x: [0, 1] }}
              transition={{ yoyo: Infinity, duration: 2 }}
            />
            <motion.circle
              cx="56.97"
              cy="125.15"
              r="0.79"
              fill="#fff"
              initial={{ y: -2, scale: 0, opacity: 1 }}
              animate={{
                y: [-3, -4, -10],
                scale: [1.5, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                loop: Infinity,
                type: "spring",
                duration: 4,
              }}
            />
            <motion.circle
              cx="73.08"
              cy="125.94"
              r="1.01"
              fill="#fff"
              animate={{ scale: [1, 2, 1] }}
              transition={{ duration: 5, loop: Infinity }}
            />
            <motion.circle
              cx="60.21"
              cy="133.21"
              r="0.72"
              fill="#fff"
              initial={{ opacity: 1 }}
              animate={{
                opacity: [1, 1, 1, 0],
                x: [1, -7, -8, -9, -10],
                y: [-1, -5, -8, -12, -15],
                scale: [0.2, 4, 2.8, 2, 1.2],
              }}
              transition={{
                loop: Infinity,
                ease: [0.25, 0.25, 0.25, 0.25],
                duration: 2,
                delay: 1.6,
              }}
            />
            <motion.circle
              cx="71.97"
              cy="136.79"
              r="0.79"
              fill="#fff"
              initial={{ opacity: 1 }}
              animate={{
                opacity: [1, 1, 1, 0],
                x: [-1, 7, 8, 9, 10],
                y: [-1, -5, -8, -12, -15],
                scale: [0.5, 3, 2.8, 2, 1.2],
              }}
              transition={{
                loop: Infinity,
                ease: [0.25, 0.25, 0.25, 0.25],
                duration: 2,
              }}
            />
          </motion.g>
          <rect
            x="58.71"
            y="6.91"
            width="12.18"
            height="1.85"
            rx="0.93"
            fill="#fff"
            id="line_cam"
          />
          <circle cx="74.21" cy="7.84" r="1.17" fill="#fff" id="circle_cam" />
        </svg>
      </div>

      <div className="after_vh">
        <div className="subcontainer_width">
          <div className="srollable_things">
            <motion.div className="container_popup ux" ref={ref_ux_cont}>
              <motion.p
                className="popup_txt"
                variants={popup_txtVariants}
                initial="hidden_txt"
                animate={controls_popup_txt}
              >
                UX
              </motion.p>
              <motion.div
                ref={ref_ux}
                className="square_popup"
                variants={popup_squareVariants}
                initial="hidden"
                animate={controls_popup_square}
              ></motion.div>
            </motion.div>
            <div className="container_popup ui">
              <motion.div ref={ref_ui_cont} className="flex_ui">
                <motion.p
                  className="popup_txt"
                  variants={popup_txtVariants}
                  initial="hidden_txt"
                  animate={controls_popup_txt_ui}
                >
                  UI
                </motion.p>
                <motion.div
                  ref={ref_ui}
                  className="square_popup"
                  variants={popup_squareVariants}
                  initial="hidden"
                  animate={controls_popup_square_ui}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="thing_open">
          <img src={require("./img/tabcoda_open.svg")} />
        </div>
        <div className="thing_close">
          <img src={require("./img/tabcoda_close.svg")} />
        </div>
      </div>
    </motion.div>
  );
}

export default Mobile;
