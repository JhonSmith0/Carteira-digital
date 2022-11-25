import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IDespesa } from "../interface";
import { removerDespesa, setEditando } from "../redux/userSlice";

export function useTable() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.user);

  useEffect(() => {
    const string = JSON.stringify(data);
    localStorage.setItem(data.email, string);
  }, [data]);

  function onEditar(obj: IDespesa) {
    return () => dispatch(setEditando(obj.id));
  }
  function onExcluir(obj: IDespesa) {
    return () => dispatch(removerDespesa(obj.id));
  }

  return { data, onEditar, onExcluir };
}
