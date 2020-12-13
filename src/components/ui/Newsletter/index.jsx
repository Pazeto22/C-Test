import React, { useEffect, useState } from "react";
import "./styles.scss";

import api from "config/api";
import errorRequest from "common/errorRequest.js";

export default function Newsletter() {
  const [inputNameClass, setInputNameClass] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmailClass, setInputEmailClass] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [wasSent, setWasSent] = useState(false);

  async function sendNewsletter(event) {
    event.preventDefault();
    if (!inputName || !inputEmail) {
      if (!inputName) setInputNameClass("input-invalid");
      if (!inputEmail) setInputEmailClass("input-invalid");
      return;
    }

    try {
      await api.post(`newsletter`, {
        email: inputEmail,
        name: inputName,
      });
      setWasSent(true);
    } catch (error) {
      if (error.response.data.message === "Invalid email format") {
        setInputEmailClass("input-invalid");
        return;
      }
      errorRequest(error);
    }
  }

  function sendAgain() {
    setInputNameClass("");
    setInputName("");
    setInputEmailClass("");
    setInputEmail("");
    setWasSent(false);
  }

  return (
    <div className="view newsletter-wrapper">
      {!wasSent ? (
        <div>
          <h2>Participe de nossas news com promoções e novidades!</h2>
          <form className="newsletter-form">
            <div className="input-wrapper">
              <input
                className={inputNameClass}
                placeholder="Digite seu nome"
                type="text"
                id="input-name"
                onChange={(e) => setInputName(e.target.value)}
              />
              {inputNameClass && (
                <span className="input-invalid-name input-invalid-text">
                  Preencha com seu nome completo
                </span>
              )}
            </div>
            <div className="input-wrapper">
              <input
                className={inputEmailClass}
                placeholder="Digite seu email"
                type="email"
                id="input-email"
                onChange={(e) => setInputEmail(e.target.value)}
              />
              {inputEmailClass && (
                <span className="input-invalid-email input-invalid-text">
                  Preencha com um e-mail válido
                </span>
              )}
            </div>
            <button
              className="primary-button"
              type="submit"
              onClick={(e) => sendNewsletter(e)}
            >
              Eu quero!
            </button>
          </form>
        </div>
      ) : (
        <div className="newsletter-sent">
          <span>Seu e-mail foi cadastrado com sucesso!</span>
          <span>
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </span>
          <button className="primary-button" onClick={() => sendAgain()}>
            Cadastrar novo e-mail
          </button>
        </div>
      )}
    </div>
  );
}
