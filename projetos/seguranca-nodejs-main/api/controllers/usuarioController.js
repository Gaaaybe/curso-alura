const UsuarioService = require('../services/usuarioService');

const usuarioService = new UsuarioService();

class UsuarioController {
    
    async cadastrar(req, res) {
        const {nome, email, senha} = req.body;

        try {
            const usuario = await usuarioService.cadastrarUsuario({nome, email, senha});
            res.status(201).send(usuario);
            
        } catch (error) {
            res.status(400).send({mensagem: error.message})
        }

    }

}

module.exports = UsuarioController;