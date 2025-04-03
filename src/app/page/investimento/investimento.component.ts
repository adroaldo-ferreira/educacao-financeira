import { Component } from '@angular/core';

@Component({
  selector: 'app-investimento',
  imports: [],
  templateUrl: './investimento.component.html',
  styleUrl: './investimento.component.css'
})

export class InvestimentoComponent {
  valor = 1000.0;
  cdi = 1.92;
  taxa = 95.0;

  calcularValores() {
    const lucro = this.valor * this.taxa * this.cdi / 10000.0;
    const impostos = lucro * 0.225
    const rendimento = lucro - impostos;
  }
}
