export type ResultadoInvestimento = {
  lucro: number;
  impostos: number;
  rendimento: number;
}

export type Pagamento = {
  numero: number;
  parcela: number;
  juros: number;
  amortizacao: number;
  saldo: number;
}

export type Emprestimo = {
  valor: number;
  parcela: number;
  taxa: number;
}
