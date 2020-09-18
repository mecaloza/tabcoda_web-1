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
    setInterval(() => blink(), 350);
  }, []);

  const blink = () => {
    setIsBlink((old_value) => !old_value);
  };

  useEffect(() => {
    let s;
    if (isClick) {
      s = setInterval(() => type(), 200);
    }
    return () => {
      clearTimeout(s);
    };
  }, [isClick]);

  const type = () => {
    global.counter = global.counter + 1;
    console.log("entre");
    if (global.counter === 9) {
      setTimeout(() => (history.push("/home"), 1000));
    } else if (global.counter < 9) {
      setPositions((old_array) => [...old_array, 1]);
    }
  };

  return (
    <motion.div
      className="page"
      variants={pageVariants}
      animate={{}}
      exit="exit"
      onClick={() => setIsClick(true)}
    >
      <div className={`txtcontainer`}>
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
      <p className={`textHome`}>Haz Click Para Ingresar</p>
    </motion.div>
  );
}

export default LandingPage;
