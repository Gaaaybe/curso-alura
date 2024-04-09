const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => {
    botao.addEventListener('click', filtrarLivros);
});

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria === 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria === categoria);
    console.table(livrosFiltrados);
    exibirLivros(livrosFiltrados);
    if (categoria === 'disponivel') {
        exibirValorTotalLivrosDisponiveis();
    }
};

function exibirValorTotalLivrosDisponiveis() {
    elementoValortotalLivros.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
        </div>
    `;
};