import chalk from 'chalk';

function extraiLinks(arrLinks) {
    return arrLinks.map((objLink) => Object.values(objLink).join());
}


function mitigaErro(erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'link não encontrado'
    }else{
        return 'erro desconhecido'
    }
}

async function checaStatus(listaURLs) {
    const arrStatus = await Promise
        .all(
            listaURLs.map(async (url) => {

                try {
                    const response = await fetch(url)
                    return `${response.status} - ${response.statusText}`;

                } catch (erro) {
                    return mitigaErro(erro);
                }
            })
        )
    return arrStatus;
}

export default async function listaValidada(listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);

    return listaDeLinks.map((obj, indice) => ({
        ...obj, status: status[indice]
    }))

}