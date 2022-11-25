import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { IDespesa, IUser } from "../interface";
import {
  adicionarDespesa,
  atualizarDespesa,
  setEditando,
} from "../redux/userSlice";

const tags = ["Alimentacão", "Lazer", "Transporte", "Trabalho", "Saúde"];
const metodosDePagamento = [
  "Dinheiro",
  "Cartão de credito",
  "Cartão de débito",
];
const moedas = [
  "BRL",
  "USD",
  "USDT",
  "CAD",
  "GBP",
  "ARS",
  "BTC",
  "LTC",
  "EUR",
  "JPY",
  "CHF",
  "AUD",
  "CNY",
  "ILS",
  "ETH",
  "XRP",
  "DOGE",
];

async function calcularConversaoMoedaRS(
  valor: number,
  moeda: string
): Promise<number> {
  if (moeda.toUpperCase() === "BRL") return valor;
  const { data } = await api.get(`/json/${moeda}`);
  const { bid } = data[0];
  return +(+bid * +valor).toFixed(2);
}

const api = axios.create({ baseURL: "https://economia.awesomeapi.com.br" });

export function useForm() {
  const dispatch = useDispatch();
  const { despesas, editando } = useSelector(
    (state: any) => state.user
  ) as IUser;
  const [despesa, setDespesa] = useState<IDespesa>(defaultDespesa() as any);
  const [calculando, setCalculando] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obj = despesas.find((obj) => obj.id === editando);
    if (obj) setDespesa(obj);
    else setDespesa(defaultDespesa());
  }, [editando]);

  function cleanForm() {
    setDespesa({ ...despesa, valor: "", descricao: "", id: uuid() } as any);
  }

  function defaultDespesa() {
    return {
      id: uuid(),
      conversaoMoeda: 0,
      descricao: "",
      metodoDePagamento: metodosDePagamento[0],
      moeda: moedas[0],
      tag: tags[0],
      valor: "",
    } as any as IDespesa;
  }

  async function calc(despesa: IDespesa, converter: boolean = true) {
    if (converter)
      despesa.conversaoMoeda = await calcularConversaoMoedaRS(
        despesa.valor,
        despesa.moeda
      );
  }

  async function generic(
    despesa: IDespesa,
    fn: any,
    converter: boolean = true
  ) {
    try {
      setError(null);
      setCalculando(true);
      if (converter) await calc(despesa, converter);
      dispatch(fn(despesa));
    } catch (error) {
      console.error(error);
      setError(error as any);
    } finally {
      setCalculando(false);
    }
  }

  async function add(despesa: IDespesa, converter: boolean = true) {
    generic(despesa, adicionarDespesa, converter);
    if (!error) cleanForm();
  }
  async function save(despesa: IDespesa, converter: boolean = true) {
    generic(despesa, atualizarDespesa, converter);
    if (!error) [cleanForm(), setEditando("")];
  }

  return {
    add,
    save,
    calculando,
    error,
    editando,
    despesa,
    setDespesa,
    moedas,
    metodosDePagamento,
    tags,
  };
}
