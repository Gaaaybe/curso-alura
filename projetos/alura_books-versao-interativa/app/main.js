let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscaLivros();


async function getBuscaLivros() {
    const response = await fetch(endPointAPI);
    livros = await response.json();
    let livrosDesconto = aplicarDesconto(livros);
    exibirLivros(livrosDesconto);
    
    console.table(livros);
};