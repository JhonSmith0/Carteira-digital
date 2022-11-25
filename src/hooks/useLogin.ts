import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDespesas, setEditando, setUser } from "../redux/userSlice";
import { setUser as setUserCookie } from "../utils/setUser";

export function useLogin() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });

  function salvarUsuario(user: string) {
    const obj = JSON.parse(localStorage.getItem(user) as string);
    dispatch(setDespesas(obj?.despesas ?? []));
    dispatch(setEditando(obj?.editando ?? ""));

    dispatch(setUser(user));
    setUserCookie(user);
  }

  function onChange(name: string) {
    return (e: any) => setData({ ...data, [name]: e.target.value });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!data.email || !data.password) return;
    nav("/");
    salvarUsuario(data.email);
  }

  return { onChange, onSubmit };
}
