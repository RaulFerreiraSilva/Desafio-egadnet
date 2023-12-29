import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-div-components',
  templateUrl: './div-components.component.html',
  styleUrls: ['./div-components.component.css']
})
export class DivComponentsComponent implements OnInit {

  @Input() desafio: any | undefined;

  inputValues: number[] = new Array();
  titleDesafio: number | undefined;
  textDesafio: string | undefined;
  func: Function | undefined;
  result: number | undefined;
  inputs: Array<Number> = new Array()
  mostrar: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.titleDesafio = this.desafio.desafio;
    this.textDesafio = this.desafio.enunciado;
    this.inputs = new Array(this.desafio.inputs)
  }

  chamarFunc(): void {
    if (this.desafio.func && this.inputValues.length > 0 && this.inputValues[0] > 0) {
      this.result = this.desafio.func(this.inputValues)
    } else {
      Swal.fire({
        title: 'Erro de preenchimento no desafio ' + this.titleDesafio,
        text: 'Preencha corretamente para prosseguir',
        icon: 'error',
      });
    }
  }

  mostrarDesafio(): void {
    this.mostrar = !this.mostrar
  }

}
