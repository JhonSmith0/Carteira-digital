import styled from "styled-components";

import { useTable } from "../hooks/useTable";
import { IDespesa } from "../interface";
import { titleColor, background } from "./colors";

const STable = styled.table`
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
`;

export function Table() {
  const { data, onEditar, onExcluir } = useTable();

  return (
    <STable className="content">
      <thead>
        <tr>
          <th>DESCRIÇÃO</th>
          <th>TAG</th>
          <th>METODO DE PAGAMENTO</th>
          <th>VALOR</th>
          <th>MOEDA</th>
          <th>CONVERSÃO MOEDA(R$)</th>
          <th>EDITAR/EXCLUIR</th>
        </tr>
      </thead>
      <tbody>
        {data?.despesas.map((obj: IDespesa) => (
          <tr key={obj.id}>
            <th>{obj.descricao}</th>
            <th>{obj.tag}</th>
            <th>{obj.metodoDePagamento}</th>
            <th>{obj.valor}</th>
            <th>{obj.moeda}</th>
            <th>{obj.conversaoMoeda}</th>
            <th>
              <button onClick={onEditar(obj)} className="editar-btn">
                Editar
              </button>

              <button onClick={onExcluir(obj)} className="excluir-btn">
                Excluir
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </STable>
  );
}
