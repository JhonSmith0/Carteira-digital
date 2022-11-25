import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { IDespesa } from "../interface";
import { setDespesas, setEditando, setUser } from "../redux/userSlice";
import { getUser } from "../utils/getUser";

export function useHome() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  //@ts-ignore
  const data = useSelector((state) => state.user);

  function calcDespesas() {
    let total;
    total = data.despesas.reduce(
      (acc: number, val: IDespesa) => acc + val.conversaoMoeda,
      0
    );
    total = total.toFixed(2);
    return total.replace(".", ",");
  }

  useEffect(() => {
    const user = getUser();
    if (!user) return nav("/login");

    const obj = JSON.parse(localStorage.getItem(user) as string);
    dispatch(setDespesas(obj?.despesas ?? []));
    dispatch(setEditando(obj?.editando ?? ""));

    dispatch(setUser(user));
  }, []);

  return { data, calcDespesas };
}
