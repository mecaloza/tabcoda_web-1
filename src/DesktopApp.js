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
  
  return (
    <motion.div className="desk"
    exit={{}}>
        <TopBar />
        <div className="text_container1">
        <div className="popup_txt3">{"<"}</div>
        <div className="popup_txt2">Automatización</div>
        <div className="popup_txt3">{">"}</div>
       
    
        </div>

        <div className="popup_txt4">
            Nos adaptamos a cualquier necesitad de automatización digital que tenga tu empresa.
        
      </div>

        <div className="popup_txt5">
      Envió de correos automáticos 
      </div>
      <div className="popup_txt5">
      Chatbots
      </div>
      <div className="popup_txt5">
      Web scraping (extraer información de páginas web o aplicativos)
      </div>
      <div className="popup_txt5">
      Generación de archivos pdfs automáticos
      </div>
     
      <div className="popup_txt5">
      Aplicaciones de escritorio
      </div>

      
      <div className="popup_txt5">
      Creación de cotizaciones automáticas
      </div>
      

      <div className="popup_txt5">
      ...
      </div>

        
        
        {/* <div className="world">
        <img src={auto} alt="loading..."  height="100%" style={{marginLeft:"50%"}}/>
        </div> */}

      
      
    </motion.div>
  );
}

export default DesktopApp;
