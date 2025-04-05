import { Component } from '@angular/core';
import { Emprestimo, Pagamento } from '../../../types/CustomTypes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amortizacao',
  templateUrl: './amortizacao.component.html',
  styleUrls: ['./amortizacao.component.css'],
  imports: [FormsModule]
})
export class AmortizacaoComponent {
  pagamentos: Pagamento[] = [];
  valor!: number;
  parcela!: number;
  taxa!: number;
  opcao: 'sac' | 'price' = 'sac';
  totalJuros!: number;

  calcularParcelas() {
    const emprestimo: Emprestimo = {
      valor: this.valor,
      taxa: this.taxa / 100.0,
      parcela: this.parcela
    };

    if (this.opcao === 'sac') {
      const parcelas = this.calcularParcelasEmprestimoSAC(emprestimo);
      this.pagamentos = parcelas;
    } else {
      const parcelas = this.calcularParcelasEmprestimoPrice(emprestimo);
      this.pagamentos = parcelas;
    }

    if (this.pagamentos.length <= 0) {
      alert('Preencha os campos primeiro');
    }
  }

  private calcularParcelasEmprestimoPrice(emprestimo: Emprestimo): Pagamento[] {
    const parcelas: Pagamento[] = [];
    const valorTotal = emprestimo.valor;
    const numeroParcelas = emprestimo.parcela;
    const taxaJuros = emprestimo.taxa;
    let saldo = valorTotal;
    let somaJuros = 0.0;

    const pmt = (valorTotal * taxaJuros * Math.pow(1 + taxaJuros, numeroParcelas)) / (Math.pow(1 + taxaJuros, numeroParcelas) - 1);

    for (let n = 1; n <= numeroParcelas; n++) {
      const juros = saldo * taxaJuros;
      const amortizacao = pmt - juros;
      saldo -= amortizacao;
      somaJuros += juros;
      const pagamento: Pagamento = { parcela: pmt, juros, saldo, amortizacao, numero: n };
      parcelas.push(pagamento);
    }

    this.totalJuros = somaJuros;


    return parcelas;
  }

  private calcularParcelasEmprestimoSAC(emprestimo: Emprestimo): Pagamento[] {
    //console.log('Sistema SAC');
    const parcelas: Pagamento[] = [];
    const valorTotal = emprestimo.valor;
    const numeroParcelas = emprestimo.parcela;
    const taxaJuros = emprestimo.taxa;
    let saldo = valorTotal;
    const amortizacao = valorTotal / numeroParcelas;
    let somaJuros = 0.0;

    for (let i = 1; i <= numeroParcelas; i++) {
      const juros = saldo * taxaJuros;
      const parcela = amortizacao + juros;
      saldo -= amortizacao;
      somaJuros += juros;

      const pagamento: Pagamento = { parcela, juros, saldo, amortizacao, numero: i };
      parcelas.push(pagamento);
      //console.log(pagamento);
    }
    this.totalJuros = somaJuros;
    return parcelas;
  }
}
