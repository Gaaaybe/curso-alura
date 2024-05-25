import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Livros",
    "/autores": "Autores"
};

app.listen(PORT, () => {
    console.log(`Servidor rodando no link http://localhost:${PORT}/`);
});