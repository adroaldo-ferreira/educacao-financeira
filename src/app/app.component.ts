import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestimentoComponent } from "./page/investimento/investimento.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvestimentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EducacaoFinanceira';
}
