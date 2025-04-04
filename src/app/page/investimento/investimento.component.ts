import { Component } from '@angular/core';
import { ResultadoInvestimento } from '../../../types/CustomTypes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css'],
  imports:[FormsModule]
})

export class InvestimentoComponent {
  valor!: number;
  cdi!: number;
  taxa!: number;
  resultado?: ResultadoInvestimento;

  calcularValores() {
    const lucro = this.valor * this.taxa * this.cdi / 10000.0;
    const impostos = lucro * 0.225;
    const rendimento = lucro - impostos;

    this.resultado = {
      lucro,
      impostos,
      rendimento
    };
  }
}
