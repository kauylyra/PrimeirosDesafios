const usuarios = [
 {nome : "Carlos",tecnologias : ['HTML' , 'CSS']},
 {nome : 'Jasmine', tecnologias : ['JavaScript', 'CSS']},
 {nome : 'Tuane' , tecnologias : ['HTML' , 'Node.js']}
]
//aqui embaixo dentro do for só vai percorrer todos os usuarios nas tecnologias.
//no if ele vai percorrer o usuario e as tecnologias e achar qual dos usuarios
//tem a tecnologia "CSS"
//o return vai retornar para a função qual o usuario q usa a tecnologia.
function checaSeUsuarioUsaCSS(usuario) {
    for (let i=0; i < usuario.tecnologias.length; i++) {
      if (usuario.tecnologias[i]=='CSS') {
        return true
    }
  };
};
//neste for ele vai percorrer todos os usuarios novamente
//porem dentro da const eu recebo a primeira função e jogando dentro dela todos os usuarios.
//no if eu dou o resultado no console.log
//ou seja eu pedi para ele me mostrar dentro dos usuarios qual seria o nome que trabalha com a tecnologia.
for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}