import axios from "axios";

export const currencyApi = axios.create({
  baseURL: "https://economia.awesomeapi.com.br",
});
