export interface IDespesa {
  id: string;
  descricao: string;
  tag: string;
  metodoDePagamento: string;
  valor: number;
  moeda: string;
  conversaoMoeda: number;
}

export interface IUser {
  email: string;
  despesas: IDespesa[];
  editando: string;
}
