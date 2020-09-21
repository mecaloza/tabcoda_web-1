import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";
import {motion} from "framer-motion"
import "./DesktopApp.css";
import TopBar from "./TopBar";
import auto from './img/world.gif'

function DesktopApp() {
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
  
  return (
    <motion.div className="desk"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit={{}}>
        <TopBar />
        <div className="text_contd">
    
        <div className="text_container1d">
        <div className="popup_txt3d">{"<"}</div>
        <div className="popup_txt2d">Automatización</div>
        <div className="popup_txt3d">{">"}</div>
       
    
        </div>

        <div className="popup_txt4d">
        Nos adaptamos a cualquier necesidad de automatización digital que tenga tu empresa.
        
      </div>

        <div className="popup_txt5d">
      Envío de correos automáticos 
      </div>
      <div className="popup_txt5d">
      Chatbots
      </div>
      <div className="popup_txt5d">
      Web scraping (extraer información de páginas web o aplicativos)
      </div>
      <div className="popup_txt5d">
      Generación de archivos PDF automáticos
      </div>
     
      <div className="popup_txt5d">
      Aplicaciones de escritorio
      </div>

      
      <div className="popup_txt5d">
      Creación de cotizaciones automáticas
      </div>
      

      <div className="popup_txt5d">
      ...
      </div>

      </div>

        
        
        {/* <div className="world">
        <img src={auto} alt="loading..."  height="100%" style={{marginLeft:"50%"}}/>
        </div> */}

      
      
    </motion.div>
  );
}

export default DesktopApp;
