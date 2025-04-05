import { Routes } from '@angular/router';
import { AmortizacaoComponent } from './page/amortizacao/amortizacao.component';
import { InvestimentoComponent } from './page/investimento/investimento.component';

export const routes: Routes = [
  {
    path: 'investimento',
    component: InvestimentoComponent
  },
  {
    path: 'amortizacao',
    component: AmortizacaoComponent
  }
];
