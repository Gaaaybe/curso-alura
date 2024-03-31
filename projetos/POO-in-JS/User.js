export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    };

    get nome () {
        return this.#nome;
    };

    get email () {
        return this.#email;
    };  

    get nascimento () {
        return this.#nascimento;
    };

    get role () {
        return this.#role;
    };

    get ativo () {
        return this.#ativo;
    };

    set nome (novoNome) {
        this.#nome = novoNome;
    };

    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos() {
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
    };
};