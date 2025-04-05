import { Routes } from '@angular/router';
import { AmortizacaoComponent } from './page/amortizacao/amortizacao.component';
import { InvestimentoComponent } from './page/investimento/investimento.component';
import { CalculadoraJurosComponent } from './page/calculadora-juros/calculadora-juros.component';

export const routes: Routes = [
  {
    path: 'investimento',
    component: InvestimentoComponent
  },
  {
    path: 'amortizacao',
    component: AmortizacaoComponent
  },
  {
    path: 'calculadora-juros',
    component: CalculadoraJurosComponent
  }
];
