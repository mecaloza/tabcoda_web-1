import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home_container">
      <div className="mobile-animation">
        <img src={require("./img/mobile.svg")} height={"600px"}></img>
      </div>
    </div>
  );
}

export default Home;
