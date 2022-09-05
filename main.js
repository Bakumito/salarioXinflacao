const rlsync = require('readline-sync')

const salarios = [
  { salario: 510, ano: 2010 },
  { salario: 545, ano: 2011 },
  { salario: 622, ano: 2012 },
  { salario: 678, ano: 2013 },
  { salario: 724, ano: 2014 },
  { salario: 788, ano: 2015 },
  { salario: 880, ano: 2016 },
  { salario: 937, ano: 2017 },
  { salario: 954, ano: 2018 },
  { salario: 998, ano: 2019 },
  { salario: 1045, ano: 2020 }
]

const inflacao = [
  { ipca: 5.91, ano: 2010 },
  { ipca: 6.5, ano: 2011 },
  { ipca: 5.84, ano: 2012 },
  { ipca: 5.91, ano: 2013 },
  { ipca: 6.41, ano: 2014 },
  { ipca: 10.67, ano: 2015 },
  { ipca: 6.29, ano: 2016 },
  { ipca: 2.95, ano: 2017 },
  { ipca: 3.75, ano: 2018 },
  { ipca: 4.31, ano: 2019 },
  { ipca: 4.52, ano: 2020 }
]

const padend1 = 30
//Quantidade de símbolos a serem acrescentados
const padend2 = '.' //Símbolos a serem incrementados

console.log('1 - Listar os salários mínimos de 2010 à 2020')
console.log('2 - Listar o índice IPCA de 2010 à 2020')
console.log('3 - Comparação entre o percentual de aumento salarial e o IPCA\n')

let escolha = Number(rlsync.question('Digite o número de sua escolha: '))

if (escolha == 1) {
  for (let contador = 0; contador < salarios.length; contador++) {
    let ano = 'Ano: '.padEnd(padend1, padend2) + salarios[contador].ano
    let minimo =
      'Salário Mínimo: '.padEnd(padend1, padend2) +
      'R$ ' +
      salarios[contador].salario.toFixed(2).replace('.', ',')
    console.log(`${ano}\n${minimo}\n`)
  }
} else if (escolha == 2) {
  for (let contador = 0; contador < inflacao.length; contador++) {
    let ano = 'Ano: '.padEnd(padend1, padend2) + inflacao[contador].ano
    let ipca =
      'IPCA: '.padEnd(padend1, padend2) +
      inflacao[contador].ipca.toFixed(2).replace('.', ',') +
      '%'
    console.log(`${ano}\n${ipca}\n`)
  }
} else if (escolha == 3) {
  for (let contador = 0; contador < salarios.length; contador++) {
    let ano = 'Ano: '.padEnd(padend1, padend2) + salarios[contador].ano
    let minimo =
      'Salário Mínimo: '.padEnd(padend1, padend2) +
      'R$ ' +
      salarios[contador].salario.toFixed(2).replace('.', ',')
    let calculo =
      contador == 0
        ? ((salarios[contador].salario - salarios[contador].salario) /
            salarios[contador].salario) *
          100
        : ((salarios[contador].salario - salarios[contador - 1].salario) /
            salarios[contador - 1].salario) *
          100
    let calculo_formatado =
      'Crescimento Salarial: '.padEnd(padend1, padend2) +
      calculo.toFixed(2).replace('.', ',') +
      '%'
    let ipca =
      'IPCA: '.padEnd(padend1, padend2) +
      inflacao[contador].ipca.toFixed(2).replace('.', ',') +
      '%'
    console.log(`${ano}\n${minimo}\n${calculo_formatado}\n${ipca}\n`)
  }
}
