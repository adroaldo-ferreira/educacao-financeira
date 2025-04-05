import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-juros',
  templateUrl: './calculadora-juros.component.html',
  styleUrl: './calculadora-juros.component.css',
  imports: [FormsModule]
})
export class CalculadoraJurosComponent {
  valorPresente!: number;
  taxa!: number;
  periodo!: number;
  valorFuturo: number = -1;
  tipoJuro: 'simples' | 'composto' = 'simples';

  calcularValorFuturo() {
    console.log('Calculando os juros!');
    if (this.valorPresente && this.taxa && this.periodo) {

      if (this.tipoJuro === 'simples') {
        this.valorFuturo = this.valorPresente * this.taxa * this.periodo / 100.0 + this.valorPresente;
      } else {
        this.valorFuturo = this.valorPresente * Math.pow(1 + this.taxa / 100.0, this.periodo);
      }
    }
    else {
      alert('Preencha os campos primeiro');
    }
  }
}
