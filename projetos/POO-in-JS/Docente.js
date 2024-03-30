import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(curso) {
        return `${this.nome} foi aprovado(a) no curso ${curso}!`;
    }
}

const novoDocente = new Docente('Julia', 'j@j.com', '01/01/1992');
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('JavaScript'));