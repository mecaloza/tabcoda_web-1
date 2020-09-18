import React, { useState } from "react";
import "./Business.css";
import { motion } from "framer-motion";
import TopBar from "./TopBar";
import emailjs, { sendForm } from "emailjs-com";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function Business() {
  const contactVariants = {
    hidden: {
      x: "100vw",
    },

    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 3,
        delay: 1,
      },
    },

    exit: {
      x: "100vw",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const [name_email, setName_email] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [openDialog, setOpenDialog] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);

  var service_id = "service_tacoda";
  var template_id = "template_njaaaos";

  const history = useHistory();

  const sendForm = () => {
    emailjs
      .send(
        service_id,
        template_id,
        { name_email: name_email, email: email, message: message },
        "user_gSS8S4giTSpddMiSUylds"
      )
      .then(
        (response) => {
          if (response.status === 200) {
            setFetchSuccess(true);
            setOpenDialog(true);
          } else {
            setFetchSuccess(false);
            setOpenDialog(true);
            console.log("Failed!", response.status, response.text);
          }
        },
        (err) => {
          setFetchSuccess(false);
          setOpenDialog(true);
          console.log("Failed...", err);
        }
      );
  };

  return (
    <motion.div
      className="business_container"
      variants={contactVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Dialog
        onClose={() => {
          setOpenDialog(false);
          if (fetchSuccess) {
            history.push("/home");
          }
        }}
        aria-labelledby="simple-dialog-title"
        open={openDialog}
      >
        <DialogTitle id="simple-dialog-title" style={{ textAlign: "center" }}>
          {fetchSuccess ? (
            <FontAwesomeIcon icon={faCheckCircle} size="2x" color="green" />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} size="2x" color="red" />
          )}
        </DialogTitle>
        <DialogContent>
          {fetchSuccess ? (
            <DialogContentText>
              Tu correo se ha enviado con éxito, te contactaremos en breve.
              <DialogContentText>Saludos!</DialogContentText>
              <DialogContentText>Equipo TABCODA.</DialogContentText>
            </DialogContentText>
          ) : (
            <DialogContentText>
              Algo salió mal, intenta nuevamente.
            </DialogContentText>
          )}
        </DialogContent>
      </Dialog>
      <TopBar />
      <div className="business_subcontainer">
        <img src={require("./img/envelope.svg")} className="envelope" />
        <div className="email_sheet_container">
          <div className="email_sheet_subcontainer" style={{ flex: 0.2 }}>
            <p className="labelEmail">Nombre</p>
            <input
              className="input_email"
              onChange={(event) => setName_email(event.target.value)}
            />
          </div>
          <div className="email_sheet_subcontainer" style={{ flex: 0.2 }}>
            <p className="labelEmail">Email</p>
            <input
              className="input_email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="email_sheet_subcontainer" style={{ flex: 0.5 }}>
            <p className="labelEmail">Mensaje</p>
            <textarea
              className="txtarea_email"
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <div className="email_sheet_subcontainer" style={{ flex: 0.1 }}>
            <button className="btn_email" onClick={() => sendForm()}>
              Enviar
            </button>
          </div>
        </div>
        <div className="outside_txt_emailcontainer">
          <p>
            Diligencia el formulario o envianos un correo a info@tabcoda.com
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Business;
