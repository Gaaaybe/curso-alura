let logado = false;
let admin = true;

if (logado && admin) {
  console.log('Bem vindo, administrador!');
} else if (logado && !admin) {
  console.log('Bem vindo, usuário!');
} else {
  console.log('Você precisa fazer login para acessar o sistema.');
}