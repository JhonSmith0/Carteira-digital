import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "../interface";

interface IReducers {
  [key: string]: (state: IUser, action: any) => any;
}

const userSlice = createSlice({
  initialState: {
    email: "",
    despesas: [],
    editando: "",
  },
  name: "user",
  reducers: {
    setEditando(state, { payload }) {
      state.editando = payload;
    },

    setUser(state, action) {
      state.email = action.payload;
    },

    cleanUser(state) {
      state.email = "";
    },

    adicionarDespesa(state: any, action: any) {
      state.despesas.push(action.payload);
    },

    removerDespesa(state: IUser, action) {
      const i = state.despesas.findIndex((obj) => obj.id === action.payload);

      if (state.despesas[i]?.id === state.editando) state.editando = "";

      if (i >= 0) state.despesas.splice(i, 1);
    },

    atualizarDespesa(state: IUser, { payload }) {
      const i = state.despesas.findIndex((obj) => obj.id === payload.id);
      if (i < 0) return;
      state.despesas[i] = payload;
      state.editando = "";
    },

    setDespesas(state, action) {
      state.despesas = action.payload;
    },
  },
});

export const {
  setUser,
  cleanUser,
  removerDespesa,
  adicionarDespesa,
  atualizarDespesa,
  setEditando,
  setDespesas,
} = userSlice.actions;

export { userSlice };
