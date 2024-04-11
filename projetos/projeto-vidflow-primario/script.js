const containerVideos = document.querySelector('.videos__container');
const barraPesquisa = document.querySelector('.pesquisar__input');

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item");
    
    if(barraPesquisa.value != ""){
        videos.forEach(video => {
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraPesquisa.value.toLowerCase();

            if(!titulo.includes(valorFiltro)){
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        });
    } else {
        videos.forEach(video => {
            video.style.display = "block";
        });
    
    }
};

async function buscarMostrarVideos(){
    try{
        const busca = await fetch('http://localhost:3000/videos');
        const videos = await busca.json();
            videos.forEach((video) => {
                if(video.categoria === ''){
                    throw new Error('Categoria não encontrada');
                }
                containerVideos.innerHTML += `
                <li class="videos__item"> 
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                    </div>
                </li>
                `;
            });
    } catch (error){
        containerVideos.innerHTML = `<p>Erro ao buscar os vídeo ${error}</p>`;
    } finally{
        console.log('Vídeos carregados com sucesso!');
    };
};

buscarMostrarVideos();
barraPesquisa.addEventListener('input', filtrarPesquisa);