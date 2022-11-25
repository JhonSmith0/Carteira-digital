import { useTable } from "../hooks/useTable";
import { IDespesa } from "../interface";

export function Table() {
  const { data, onEditar, onExcluir } = useTable();

  return (
    <table className="content">
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
    </table>
  );
}
