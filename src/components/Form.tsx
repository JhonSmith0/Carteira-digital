import styled from "styled-components";
import { useForm } from "../hooks/useForm";
import { background2 } from "./colors";

const SForm = styled.form`
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
`;

export function Form() {
  const {
    add,
    calculando,
    error,
    setDespesa,
    save,
    editando,
    despesa,
    moedas,
    metodosDePagamento,
    tags,
  } = useForm();

  async function onSubmit(e: any) {
    e.preventDefault();
    if (editando) save(despesa);
    else add(despesa);
  }

  function renderOptions(options: string[]) {
    return options.map((e) => <option key={e}>{e}</option>);
  }

  function onChange(name: string, number?: boolean) {
    return (e: any) =>
      setDespesa({
        ...despesa,
        [name]: number ? +e.target.value : e.target.value,
      });
  }

  return (
    <SForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="valor">VALOR</label>
        <input
          type={"number"}
          step={0.01}
          name="valor"
          required
          min={0}
          onChange={onChange("valor", true)}
          value={despesa.valor}
          disabled={calculando}
        />
      </div>
      <div>
        <label htmlFor="descricao">DESCRICAO</label>
        <input
          type="text"
          onChange={onChange("descricao")}
          value={despesa.descricao}
          disabled={calculando}
        />
      </div>
      <div>
        <label htmlFor="moedas">MOEDA</label>
        <select
          id="moedas"
          onChange={onChange("moeda")}
          value={despesa.moeda}
          disabled={calculando}
        >
          {renderOptions(moedas)}
        </select>
      </div>
      <div>
        <label htmlFor="metodo-de-pagamento">METODO DE PAGAMENTO</label>
        <select
          id="metodo-de-pagamento"
          value={despesa.metodoDePagamento}
          onChange={onChange("metodoDePagamento")}
          disabled={calculando}
        >
          {renderOptions(metodosDePagamento)}
        </select>
      </div>
      <div>
        <label htmlFor="tags">TAG</label>
        <select
          id="tag"
          value={despesa.tag}
          onChange={onChange("tag")}
          disabled={calculando}
        >
          {renderOptions(tags)}
        </select>
      </div>
      <button type="submit">{editando ? "SALVAR" : "ADICIONAR"}</button>
    </SForm>
  );
}
