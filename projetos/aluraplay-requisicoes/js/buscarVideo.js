import { conectaApi } from "./conectaApi.js";

async function buscarVideo(event){
    event.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    console.log(busca);
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

botaoDePesquisa.addEventListener('click', event => buscarVideo(event));