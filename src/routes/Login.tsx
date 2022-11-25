import { Component, ReactNode, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import walletPana from "../assets/wallet-pana.png";
import {
  anchorColor,
  background,
  placeHolderColor,
  titleColor,
} from "../components/colors";
import { useLogin } from "../hooks/useLogin";

const GlobalStyle = createGlobalStyle`
body {
  background: ${background};
  }
`;

const SLogin = styled.div`
  width: 100vw;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 60rem;
    display: grid;
  }

  .logo {
    width: 66%;
    margin-inline: auto;
  }

  .login-container {
    background: white;
    font-family: "Iceberg", sans-serif;
    color: ${titleColor};

    padding: 2rem 4rem;

    label {
      color: ${titleColor};
      font-weight: 400;
    }

    h1 {
      font-weight: 400;
      text-align: center;
      line-height: 4.4rem;
      font-size: 3.8rem;
    }

    fieldset {
      border: none;
      font-size: 2rem;
      display: grid;
      gap: 0.6rem;
      margin-bottom: 1.8rem;
    }

    fieldset:last-of-type {
      margin-bottom: 1rem;
    }

    input,
    input::placeholder {
      color: ${placeHolderColor};
      font-family: IBM Plex Sans Hebrew;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 3rem;
      letter-spacing: 0em;
      text-align: left;
    }
    input {
      display: block;
      background: ${background};
      outline: none;
      border: none;
      padding: 1rem;
      color: ${titleColor};
    }

    a {
      font-family: "IBM Plex Sans Hebrew";
      font-size: 1.5rem;
      color: ${anchorColor};
      text-decoration: none;
      margin-left: auto;
      display: block;
      width: max-content;
      font-weight: 400;
    }
  }
`;

export default function Login() {
  const { onChange, onSubmit } = useLogin();

  return (
    <>
      <GlobalStyle />
      <SLogin>
        <div className="container">
          <img src={walletPana} className="logo"></img>

          <div className="login-container">
            <h1>
              Seja bem-vindo
              <br />a sua carteira
            </h1>
            <form onSubmit={onSubmit}>
              <fieldset>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail..."
                  onChange={onChange("email")}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha aqui..."
                  onChange={onChange("password")}
                />
                <input type="submit" value="" style={{ display: "none" }} />
              </fieldset>
            </form>

            <a href="#">
              <span>Esqueci minha senha!</span>
            </a>
          </div>
        </div>
      </SLogin>
    </>
  );
}
