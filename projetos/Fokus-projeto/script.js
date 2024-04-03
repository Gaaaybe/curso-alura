const html = document.querySelector('html');
const btFoco = document.querySelector('.app__card-button--foco');
const btCurto = document.querySelector('.app__card-button--curto');
const btLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

btFoco.addEventListener('click', () => {
    alterarContexto('foco');
});

btCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto');
});

btLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo');
});

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
};