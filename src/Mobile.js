import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
  useElementScroll,
  AnimatePresence,
} from "framer-motion";
import "./Mobile.css";
import TopBar from "./TopBar";
import useWindowDimensions from "./dimensions";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";
import Screen_2 from "./Screen_2";
import Screen_1 from "./Screen_1";

function Mobile() {
  const { height, width } = useWindowDimensions();
  const history = useHistory();

  const ref_container = useRef();
  const { scrollYProgress } = useElementScroll(ref_container);

  const [color, setColor] = useState("#fff");
  const [screen_1, setScreen_1] = useState(false);
  const [screen_2, setScreen_2] = useState(false);

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

  //useEffect Screens and middle_circle

  useEffect(() => {
    control_middle_circle.start("screen_0");
  }, []);

  const control_middle_circle = useAnimation();

  scrollYProgress.onChange((x) => {
    if (x > 0 && x < 0.2) {
      setScreen_1(false);
      control_middle_circle.start("screen_0");
    } else if (x >= 0.2 && x < 0.6) {
      setScreen_1(true);
      setScreen_2(false);
      control_middle_circle.start("screen_1");
    } else if (x >= 0.6 && x <= 0.98) {
      control_middle_circle.start("screen_2");
      setScreen_1(false);
      setScreen_2(true);
    } else if (x > 0.98) {
      control_middle_circle.start("screen_0");

      setScreen_1(false);
      setScreen_2(false);
    }
  });

  //ANIMATION VARIANTS
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

  const screen_Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },

    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 2,
        ease: "circOut",
      },
    },

    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const middle_circle_Variants = {
    screen_0: {
      rotate: [-20, 0, 20, 0, -20],
      y: 0,
      transition: {
        duration: 0.4,
        rotate: { loop: "Infinity", duration: 5 },
        ease: "easeIn",
      },
    },
    screen_1: {
      y: 118,

      transition: {
        duration: 5,
        loop: "Infinity",
        ease: "linear",
        y: { duration: 1 },
      },
    },

    screen_2: {
      y: 118,
      transition: {
        duration: 0.8,
        ease: "linear",
      },
    },
  };

  return (
    <>
      <motion.div className="mobile_container" ref={ref_container} exit={{}}>
        <motion.div
          variants={initContainerVariants}
          initial="visible"
          animate="hidden"
          className="circle_init"
        ></motion.div>
        <TopBar />
        <div className="subcontainer_width">
          <div className="text_about_container">
            <p class="text_about_title">
              <span style={{ color: "#20fc00" }}>{"<"}</span>
              APP Mobiles<span style={{ color: "#20fc00" }}>{">"}</span>
            </p>
            <div className="text_about_content_container">
              <p style={{ fontSize: "20px", lineHeight: "normal" }}>
                <span style={{ fontWeight: "bold" }}>
                  Una idea como la tuya requiere expertos como nosotros!.{" "}
                </span>
                Más que un desarrollador seremos el aliado estratégico que tu
                proyecto necesita, te acompañamos desde el bosquejo de tu idea
                hasta la descarga final en las tiendas móviles.

              </p>
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "normal",
                  fontWeight: "bold",
                  marginTop: "3px",
                }}
              >
                Déjanos superar tus expectativas!
              </p>
            </div>
            <p class="text_about_subtitle">Nuestro Proceso</p>
            <img
              src={require("./img/work_flow_2.svg")}
              width={isMobile ? "80%" : "70%"}
              className="work_flow_img"
            />
          </div>
        </div>

        <div className="arrow_down">
          <motion.img
            src={require("./img/arrow_down.svg")}
            height={"20px"}
            animate={{
              y: [0, -10, 0],
              transition: { duration: 1, yoyo: Infinity },
            }}
          />
        </div>
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
              fill="#ff6700"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="0.5"
            />
            <path
              d="M1.69 56.57h0A1.44 1.44 0 0 1 3.11 58V72.28a1.43 1.43 0 0 1-2.85 0V58a1.44 1.44 0 0 1 1.42-1.42Z"
              transform="translate(0)"
              fill="#ff6700"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="0.5"
            />
            <path
              d="M1.69 78.22h0a1.43 1.43 0 0 1 1.42 1.42V93.93a1.43 1.43 0 0 1-2.85 0V79.64a1.43 1.43 0 0 1 1.42-1.42Z"
              transform="translate(0)"
              fill="#ff6700"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="0.5"
            />
            <path
              d="M1.69 34.38h0A1.44 1.44 0 0 1 3.11 35.8V45a1.42 1.42 0 0 1-1.29 1.54h0A1.42 1.42 0 0 1 0.26 45.28h0a1 1 0 0 1 0-0.24V35.8a1.44 1.44 0 0 1 1.42-1.42Z"
              transform="translate(0)"
              fill="#ff6700"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="0.5"
            />

            <motion.rect
              x="6.8"
              y="2.93"
              width="120.6"
              height="259.13"
              rx="17.6"
              fill="#000000"
              id="content"
            />

            <AnimatePresence exitBeforeEnter>
              {screen_1 ? <Screen_1 variants={screen_Variants} /> : null}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              {screen_2 ? <Screen_2 variants={screen_Variants} /> : null}
            </AnimatePresence>

            <motion.g
              variants={middle_circle_Variants}
              animate={control_middle_circle}
            >
              <motion.circle
                cx="67.04"
                cy="131.65"
                r="6.83"
                fill={color}
                animate={{ y: [0, -2], x: [0, 1] }}
                transition={{ yoyo: Infinity, duration: 2 }}
              />
              <motion.circle
                cx="56.97"
                cy="125.15"
                r="0.79"
                fill={color}
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
                fill={color}
                animate={{ scale: [1, 2, 1] }}
                transition={{ duration: 5, loop: Infinity }}
              />
              <motion.circle
                cx="60.21"
                cy="133.21"
                r="0.72"
                fill={color}
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
                fill={color}
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
          {isMobile ? (
            <div className="thing_open">
              <img src={require("./img/tabcoda_open.svg")} />
            </div>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}

export default Mobile;
