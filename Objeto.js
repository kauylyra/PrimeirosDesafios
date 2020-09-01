const   empresa =[{
    nome: "rocketseat",
    cor : "roxo",
    foco : "programação",
    endereco : "rua Guilherme Gembala Numero 260"
}
]
const usuario = [
    {
        nome : "kauy",
        idade :29,
        empresa : "rocketseat"

}
]
console.log (`a empresa ${empresa[0].nome} está localizada no endereço: ${empresa[0].endereco}.`)
console.log (`o Usuário ${usuario[0].nome}, com a idade de ${usuario[0].idade} anos trabalha na 
empresa : ${empresa[0].nome}. No endereço ${empresa[0].endereco}.`)
