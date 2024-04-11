const user = {
    nome: 'Lucas',
    email: 'lucas@Mail.com',
    nascimento: '01/01/2000',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Nascimento: ${this.nascimento}, Role: ${this.role}, Ativo: ${this.ativo}`);
    }
};

const admin = {
    nome: 'Mariana',
    email: 'mariana@Mail.com',
    nascimento: '01/01/2002',
    role: 'admin',
    ativo: true,
    criarCurso: function() {
        console.log('Curso criado com sucesso!');
    }
};

Object.setPrototypeOf(admin, user);

admin.exibirInfos();
admin.criarCurso();