import { useForm } from "../hooks/useForm";

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
    <form onSubmit={onSubmit}>
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
    </form>
  );
}
