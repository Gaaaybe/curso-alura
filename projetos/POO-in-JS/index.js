import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Jessica', 'j@j.com', '01/01/1990');
const novoAdmin = new Admin('Roberval', 'r@r.com', '01/01/1990');

// console.log(novoUser.exibirInfos());

console.log(novoAdmin.nome);