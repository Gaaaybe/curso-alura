let btnOrdernarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPreco.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivros(livrosOrdenados);
};