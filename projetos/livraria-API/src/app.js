import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        nome: "O Senhor dos Anéis",
    },
    {
        id: 2,
        nome: "Harry Potter",
    }
];

app.get('/', (req, res) => {
    res.status(200).send("Curso Node Js");
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro adicionado com sucesso");
});

export default app;