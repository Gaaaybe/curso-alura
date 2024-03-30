function extraiLinks(arrLinks){
    return arrLinks.map((objLink) => Object.values(objLink).join())
}

export default function listaValidada(listaDeLinks){
    return extraiLinks(listaDeLinks);
}