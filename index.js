//Criar um programa que calcula a média
//das notas entre os alunos e envia
//mensagem de calculo média 
//
const aluno01 = "kauy"

const notaAluno01 = 9.8

const aluno02 ='Eli'
const notaAluno02 = 10

const aluno03 = 'fulano'
const notaAluno03 = 2


const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


//se a media for maior que 5,parabenizar a turma
if (media >= 5){
    console.log (`a media foi de ${media}. Parabens`)
}else{
    console.log('a média é menor que 5')
}

console.log(media)
