import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(curso) {
        return `${this.nome} foi aprovado(a) no curso ${curso}!`;
    }
};