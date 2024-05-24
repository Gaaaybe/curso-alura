import express from 'express';
import conectarNaDB from './config/dbconnect.js';


const conexao = await conectarNaDB(); // Conexão com o banco de dados
conexao.on("error", (erro) => { console.log("Erro ao conectar no banco de dados: " + erro)}); // Tratamento de erro

conexao.once("open", () => { // Conexão bem sucedida
    console.log("Conexão com o banco de dados realizada com sucesso");
});

const app = express();
app.use(express.json());

const livros = [ // Array de livros
    {
        id: 1,
        nome: "O Senhor dos Anéis",
    },
    {
        id: 2,
        nome: "Harry Potter",
    }
];

function buscaLivro(id) { // Função para buscar livro pelo id
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
;}

app.get('/', (req, res) => { // Rota principal
    res.status(200).send("Curso Node Js");
});

app.get('/livros', (req, res) => { // Rota para listar todos os livros
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => { // Rota para buscar livro pelo id
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => { // Rota para adicionar livro
    livros.push(req.body);
    res.status(201).send("Livro adicionado com sucesso");
});

app.put('/livros/:id', (req, res) => { // Rota para atualizar livro
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => { // Rota para deletar livro
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).json(livros);
});

export default app;