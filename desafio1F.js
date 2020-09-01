const nome = "Elisangela"
const sexo = "F"
const idade = 29
const contribuicao = 30
//nesse caso o "if" está dizendo que caso a constante "sexo" for igualmente a "F",
//a idade for maior ou igual à 60 OU a contribuição for igual ou maior que 30
//printar na tela(console.log) que a senhora (nome) que no caso seria a constante "nome"
//ja pode se aposentar



if (sexo == "F" && idade >= 60 || contribuicao >= 30){
    console.log(`a senhora ${nome} ja pode se aposentar ! ` )
}
//já o else seria "ou",ou seja...
//ou escrever na tela a senhora (nome) ainda nao pode se aposentar! 
else{
    console.log(`a senhora ${nome} ainda nao pode se aposentar !!`)
}



