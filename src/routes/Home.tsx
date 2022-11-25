import styled from "styled-components";

import { background, background2, titleColor } from "../components/colors";
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

    form {
      display: flex;
      gap: 2.4rem;
      align-items: center;
      background: ${background2};
      padding: 1rem 3.2rem;
      width: 100%;
      justify-content: center;
      border-radius: 6px;
      overflow: hidden;

      & > div {
        line-height: 2;
        text-align: center;
        font-size: 1.8rem;
        display: grid;
        letter-spacing: 0.5px;
      }

      select,
      input {
        border: none;
        height: 2rem;
        outline: none;
      }

      input {
        padding: 0.1rem 0.5rem;
      }

      label {
        padding-inline: 0.5rem;
        min-width: 10ch;
      }

      button {
        font-size: 1.6rem;
        border: none;
        outline: none;
        background: none;
        margin-block: auto 0.5rem;
      }
    }

    table {
      width: 100%;
      margin-top: 1.4rem;
      border-spacing: 1px;

      thead {
        background: ${titleColor};
        color: white;

        th:first-child {
          border-radius: 6px 0 0 6px;
        }
        th:last-child {
          border-radius: 0 6px 6px 0;
        }
      }

      th,
      td {
        padding: 1rem 1.6rem;
        font-size: 1.4rem;
        text-align: center;
        font-weight: 400;
      }

      tbody {
        background: ${background};
        font-family: "Rubik", sans-serif;
        letter-spacing: unset;
        color: ${titleColor};
      }
    }
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
  const { data, calcDespesas } = useHome();

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
        <a href="/login">
          <ProfileIcon className="icon profile-icon" />
        </a>
      </header>
      <main>
        <Form />
        <Table />
      </main>
    </SHome>
  );
}
