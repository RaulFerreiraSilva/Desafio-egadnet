import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desafios = [{
    desafio: 1,
    inputs: 2,
    enunciado: `Construir um algoritmo que leia dois números inteiros e efetue a adição. Caso o
    valor somado seja maior que 20, este deverá ser apresentado somando-se a ele mais 8;
    caso o valor somado seja menor ou igual a 20 deverá ser apresentado subtraindo-se 5.`,
    func: (num: Array<number>) => {
      let resultadoSoma: number = num.reduce((number1, number2) => number1 + number2, 0)
      return resultadoSoma > 20 ? resultadoSoma + 8 : resultadoSoma - 5;
    }
  }, {
    desafio: 2,
    inputs: 1,
    enunciado: `Entrar com um número e informar se ele é divisível por 10, por 5, por 2 ou se não
    é divisível por nenhum destes.`,
    func: (dividendo: number) => {
      let divisores = [2, 5, 10]
      const divisivel = (divisor: number) => dividendo % divisor === 0
      return divisores.filter(divisivel).length > 0 ? divisores.filter(divisivel) : `Não é divisivel por nenhum desses ${divisores}`
    }
  }, {
    desafio: 3,
    inputs: 3,
    enunciado: `Entrar com 3 números e imprimi-los em ordem decrescente (suponha números
    diferentes)`,
    func: (numeros: Array<number>) => {
      console.log(numeros)
      let arrayOrdenado = [...numeros]
      return arrayOrdenado.sort((a: number, b: number) => a - b)
    }
  }, {
    desafio: 4,
    inputs: 1,
    enunciado: `Ler um número inteiro entre 1 e 12 e escrever o mês correspondente. Caso o
    número seja fora desse intervalo, informar que não existe mês com este número.`,
    func: (mes: number) => {
      let mesesExtenso = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
      return mes > 0 && mes <= 12 ? mesesExtenso[mes - 1] : "Não existe mês com este número."
    }
  }, {
    desafio: 5,
    inputs: 1,
    enunciado: `Criar um algoritmo que leia um número e imprima todos os números de 1 até ele.`,
    func: (num: number) => {
      let percorridos = new Array();
      for (let i = 1; i <= num; i++) {
        percorridos.push(i)
      }
      return percorridos
    }
  }, {
    desafio: 6,
    inputs: 10,
    enunciado: `Entrar com 5 números inteiros em um vetor e imprimir uma mensagem contendo o número e se ele é par ou ímpar.`,
    func: (num: Array<number>) => {
      let parOuImpar: Array<(string)> = [];
      num.forEach((num: number) => {
        parOuImpar.push(`${num}: ${num % 2 == 0 ? "Par" : "Impar"}`)
      })

      return parOuImpar
    }
  }, {
    desafio: 7,
    inputs: 10,
    enunciado: `Entrar com 10 números inteiros. Imprimir o maior e o menor número sem ordenar.`,
    func: (numArray: Array<number>) => {
      let maior: number = numArray[0];
      let menor: number = numArray[0];

      numArray.forEach((num: number) => {
        num = num;
        if (num > maior) {
          maior = num;
        }
        if (num < menor) {
          menor = num;
        }
      });
      return `maior: ${maior} | menor: ${menor}`
    }
  }, {
    desafio: 8,
    inputs: 10,
    enunciado: `Entrar com cinco números em um vetor e mais cinco números em outro vetor. Imprimir somente os números que existem nos dois vetores.`,
    func: (numeros: Array<number>) => {
      const primeiroArray = numeros.filter((element, index) => index % 2 === 0); // Seleciona a primeria fileira de inputs
      const segundoArray = numeros.filter((element, index) => index % 2 !== 0); // Seleciona a segunda fileira de inputs
      let encontrados = primeiroArray.filter((num) => segundoArray.includes(num))
      return encontrados
    }
  }
  ];
}
