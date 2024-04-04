const html = document.querySelector('html');
const btFoco = document.querySelector('.app__card-button--foco');
const btCurto = document.querySelector('.app__card-button--curto');
const btLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')
const btStartPause = document.querySelector('#start-pause');
musica.loop = true;

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musicFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

btFoco.addEventListener('click', () => {
    alterarContexto('foco');
    btFoco.classList.add('active');
});

btCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    btCurto.classList.add('active');
});

btLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    btLongo.classList.add('active');
});

function alterarContexto(contexto) {
    botoes.forEach((contexto) => {
        contexto.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
    
    switch (contexto) {
        case 'foco':
            title.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            break;
        case 'descanso-curto':
            title.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `;
            break;
        case 'descanso-longo':
            title.innerHTML = `
            Hora de voltar à superfície,<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
            break;    
        default:
            break;
    };
};

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play();
        alert('Tempo finalizado!');
        zerar();
        return;
    };
    tempoDecorridoEmSegundos -= 1;
    console.log('Temporizador: ' + tempoDecorridoEmSegundos);

};

btStartPause.addEventListener('click', reproduzPausa);

function reproduzPausa() {
    if(intervaloId){
        audioPausa.play();
        zerar();
        return;
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
};

function zerar() {
    clearInterval(intervaloId) ;
    intervaloId = null;
};




