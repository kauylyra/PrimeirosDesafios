const usuarios = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
]


function somaNumeros (numeros) {
  let soma = 0
  for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i]
  }
  return soma
}

function calculaSaldo (receitas, despesas) {
  const totalReceita = somaNumeros(receitas)
  const totalDespesa = somaNumeros(despesas)
  const saldo = totalReceita - totalDespesa
  return saldo
}

function saldoPositivoNegativo (saldo) {
  if (saldo > 0) {
      return 'positivo'
  } else {
      return 'negativo'
  }
}

for (let i=0; i < usuarios.length; i++) {
  const saldoUsuario = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
  const situacaoSaldo = saldoPositivoNegativo(saldoUsuario)
  console.log(`O saldo do usuario ${usuarios[i].nome} é ${situacaoSaldo} de ${parseFloat(saldoUsuario.toFixed(2))}`)
}
