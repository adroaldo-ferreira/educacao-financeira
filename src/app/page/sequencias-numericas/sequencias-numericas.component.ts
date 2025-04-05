import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Sequencia = {
  maiorPosicao: number;
  menorPosicao: number;
  valorMaiorPosicao: number;
  valorMenorPosicao: number;
};

@Component({
  selector: 'app-sequencias-numericas',
  imports: [FormsModule],
  templateUrl: './sequencias-numericas.component.html',
  styleUrl: './sequencias-numericas.component.css'
})
export class SequenciasNumericasComponent {
  an!: number;
  am!: number;
  pm!: number;
  pn!: number;
  razao!: number;
  tipo: 'pa' | 'pg' = 'pg';

  calcularElemento() {

    const valores = {
      an: this.an,
      pn: this.pn,
      am: this.an,
      pm: this.pm
    }

   // console.log(valores);

    if (Number.isInteger(this.pn) && Number.isInteger(this.pm) && this.pm > 0 && this.pn > 0) {
      if (this.tipo == 'pa') {
        if (this.an === this.am) {
          this.razao = 0;
        } else {
          const a1 = (-this.am + this.an + this.pn * this.am - this.pm * this.an) / (this.pn - this.pm);
          this.razao = (this.an - a1) / (this.pn - 1);
        }
      } else if (this.tipo == 'pg') {
        // console.log('PG');

        if (this.am == this.an) {
          this.razao = 1;
        } else {
          if (this.am > this.an) {
            const sequencia: Sequencia = { maiorPosicao: this.pm, menorPosicao: this.pn, valorMaiorPosicao: this.am, valorMenorPosicao: this.an };
            this.razao = this.calcularRazaoPg(sequencia);
          }
          else {
            const sequencia: Sequencia = { maiorPosicao: this.pn, menorPosicao: this.pm, valorMaiorPosicao: this.an, valorMenorPosicao: this.am };
            this.razao = this.calcularRazaoPg(sequencia);
          }
          //console.log(`Razão = ${this.razao}`)
        }
      }
    } else {
      alert('As posições devem ser valores inteiros positivos e distintos');
      return;
    }
  }

  private calcularRazaoPg(seq: Sequencia): number {
    return Math.pow(seq.valorMaiorPosicao / seq.valorMenorPosicao, 1 / (seq.maiorPosicao - seq.menorPosicao));
  }
}
