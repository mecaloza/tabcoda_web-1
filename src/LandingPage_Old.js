import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import "./reset.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";
import { motion } from "framer-motion";

global.counter = 0;

function LandingPage() {
  const history = useHistory();

  const [positions, setPositions] = useState([]);
  const [isBlink, setIsBlink] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [interval_c, setInterval_c] = useState();

  const pageVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  //blink cursor effect
  useEffect(() => {
    setInterval(() => blink(), 500);
  }, []);

  const blink = () => {
    setIsBlink((old_value) => !old_value);
  };

  const clickOn = () => {
    setIsClick(true);
  };

  const clickOff = () => {
    console.log("si");
    console.log(global.counter);
    if (global.counter < 9) {
      global.counter = 0;
      setPositions([]);
      clearInterval(interval_c);
      setIsClick(false);
    } else if (global.counter >= 9) {
      clearInterval(interval_c);
      setPositions([1, 1, 1, 1, 1, 1, 1, 1]);
    }
  };

  useEffect(() => {
    if (isClick && global.counter < 9) {
      let s = setInterval(() => type(), 300);
      setInterval_c(s);
    }
  }, [isClick]);

  const type = () => {
    global.counter = global.counter + 1;
    console.log("entre");
    if (global.counter === 9) {
      setTimeout(() => (history.push("/home"), 2000));
    } else if (global.counter < 9) {
      setPositions((old_array) => [...old_array, 1]);
    }
  };

  return (
    <motion.div
      className="page"
      onMouseDown={() => clickOn()}
      onMouseUp={() => clickOff()}
      onTouchStart={() => clickOn()}
      onTouchEnd={() => clickOff()}
      variants={pageVariants}
      animate={{}}
      exit="exit"
    >
      <div
        // className={`txtcontainer ${global.counter >= 9 ? "fade-out" : null}`}
        className={`txtcontainer`}
      >
        <img
          src={require(`./img/tabcoda_open.svg`)}
          height={100}
          className={"open_close"}
        />
        {isClick ? (
          <>
            {positions.map((element, index) => (
              <img
                src={require(`./img/tabcoda_${index}.svg`)}
                height={100}
                className={"letters"}
              />
            ))}
          </>
        ) : null}
        <div className={isBlink ? "cursor_active" : "cursor_inactive"} />
        <img
          src={require(`./img/tabcoda_close.svg`)}
          height={100}
          className={"open_close"}
        />
      </div>
      {/* <p className={`textHome ${global.counter >= 9 ? "fade-out" : null}`}> */}
      <p className={`textHome`}>Haz Click y sostenlo para ingresar</p>
    </motion.div>
  );
}

export default LandingPage;
