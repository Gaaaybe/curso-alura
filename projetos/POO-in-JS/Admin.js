import User from './User.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, vagas) {
        return `O curso ${nomeCurso} foi criado com sucesso e possui ${vagas} vagas.`;
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '01/01/1980');
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso('JavaScript', 20));