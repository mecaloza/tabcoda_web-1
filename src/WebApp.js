import React from "react";
import "./WebApp.css";
import TopBar from "./TopBar";

import Officetabcoda from "./officetabcoda";

import { useHistory } from "react-router-dom";
import {motion} from "framer-motion"
import { isMobile } from "react-device-detect";

function WebApp() {
  const history = useHistory();

  window.onhashchange = function() {
    console.log('hash changed');
    history.go(0);

  }

  const Content = ()=>{
    return(
    <div className="text_cont">
    
      <div className="text_container1">
        <div className="popup_txt3">{"<"}</div>
        <div className="popup_txt2">Web App</div>
        <div className="popup_txt3">{">"}</div>
      </div>
      <div className="popup_txt4">
        Potencia tu empresa con aplicaciones diseñadas a tu medida.
      </div>

      <div className="popup_txt5">
        Con una Web app nos solo podrás mostrar información sino que también
        permitirás que usuarios
      </div>
      <div className="popup_txt5">
        internos y externos interactúen, accedan a bases de datos, realicen
        cálculos, pagos...
      </div>
      
      </div>
      )
  }
  return (
    <motion.div className="WebApp_container" 
    exit={{}}>
     <TopBar />
      {isMobile ? (
        <>
            <Officetabcoda/>
            <div className="text_cont">
    
    <div className="text_container1">
      <div className="popup_txt3">{"<"}</div>
      <div className="popup_txt2">Web App</div>
      <div className="popup_txt3">{">"}</div>
    </div>
    <div className="popup_txt4">
      Potencia tu empresa con aplicaciones diseñadas a tu medida.
    </div>

    <div className="popup_txt5">
      Con una Web app nos solo podrás mostrar información sino que también
      permitirás que usuarios internos y externos interactúen, accedan a bases de datos, realicen
      cálculos, pagos...
    </div>
    
    
    </div>
            </>
          ) :   <>
          <Content/>
          <Officetabcoda/>
          
          </>
          }
         </motion.div>
  );
}

export default WebApp;
