import { Link } from "react-router-dom";
import styled from "styled-components";

import { background2, titleColor } from "../components/colors";
import { Form } from "../components/Form";
import { Table } from "../components/Table";
import { useHome } from "../hooks/useHome";
import { ProfileIcon, WalletPana2 } from "../icons";

const SHome = styled.div`
  height: 100vh;
  font-family: "Iceberg", sans-serif;
  color: ${titleColor};
  font-weight: 400;

  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: ${titleColor};
    left: 0;
    top: 0;
    height: 200px;
    width: 100%;
    z-index: -1;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    width: 100%;

    justify-items: center;

    padding-inline: 2rem;

    h1 {
      background: ${background2};
      text-align: center;
      border-radius: 0 0 6px 6px;
      padding: 0.7rem 5rem;
      margin-bottom: 1.6rem;
      font-size: 2.4rem;
      margin-inline: auto;
      width: max-content;
    }

    h2 {
      text-align: center;
      color: #ffffff4d;
      font-size: 2.4rem;
    }

    p {
      text-align: center;
      color: #ffffff;
      font-size: 4rem;
    }

    .icon {
      margin-block: 2rem;
    }
    .profile-icon {
      height: 4rem;
    }

    .wallet-icon {
      margin-top: 0;
      margin-right: -12rem;
      margin-left: -3rem;
      height: 10rem;
    }
  }

  main {
    margin-inline: auto;
    width: max-content;
    margin-block: 2.4rem;
  }

  .editar-btn {
    color: #409200;
  }
  .excluir-btn {
    color: #ff0000;
  }

  .editar-btn,
  .excluir-btn {
    display: block;
    margin-inline: auto;
    background: none;
    border: none;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: "Iceberg", sans-serif;
  }
`;

export default function Home() {
  const { calcDespesas } = useHome();

  return (
    <SHome>
      <div className="bar"></div>
      <header>
        <WalletPana2 className="icon wallet-icon" />
        <div className="middle">
          <h1>COTAÇÃO</h1>
          <div>
            <h2>DESPESA TOTAL</h2>
            <p>R$ {calcDespesas()}</p>
          </div>
        </div>

        <Link to={"/login"}>
          <ProfileIcon className="icon profile-icon" />
        </Link>
      </header>
      <main>
        <Form />
        <Table />
      </main>
    </SHome>
  );
}
