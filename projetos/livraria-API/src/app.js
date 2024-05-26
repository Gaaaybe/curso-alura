import express from 'express';
import conectarNaDB from './config/dbconnect.js';
import routes from './routes/index.js';

const conexao = await conectarNaDB(); // Conexão com o banco de dados
conexao.on("error", (erro) => { console.log("Erro ao conectar no banco de dados: " + erro)}); // Tratamento de erro

conexao.once("open", () => { // Conexão bem sucedida
    console.log("Conexão com o banco de dados realizada com sucesso");
});

const app = express();
routes(app);

app.delete('/livros/:id', (req, res) => { // Rota para deletar livro
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).json(livros);
});

export default app;