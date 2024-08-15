const db = require('../models');

class UsuarioService{

    async cadastrarUsuario(dto) {
        const usuario = await db.usuarios.findOne({where: {email: dto.email}});
        if(usuario) {
            throw new Error('Email já cadastrado');
        }
    }

}

module.exports = UsuarioService;
