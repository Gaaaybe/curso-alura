let opcao = 's';
listaLaticinios = [];
listaCongelados = [];
listaDoces = [];
listaLimpeza = [];
listaFrutas = [];
listaCereais = [];
let listaCompleta = [];

while (opcao == 's') {
    opcao = prompt("Deseja adcionar um produto a lista de compras? [s/n]");

    if (opcao == 's') {
        let categoria = prompt("Qual é a categoria do produto? [laticinios, congelados, doces, limpeza, frutas, cereais]");
        let produto = prompt("Qual é o produto?");

        if (categoria == "laticinios") {
            listaLaticinios.push(produto);

        } else if (categoria == "congelados") {
            listaCongelados.push(produto);
        } else if (categoria == "doces") {
            listaDoces.push(produto);
        } else if (categoria == "limpeza") {
            listaLimpeza.push(produto);
        } else if (categoria == "frutas") {
            listaFrutas.push(produto);
        } else if (categoria == "cereais") {
            listaCereais.push(produto);
        } else {
            alert("Categoria inválida.");
       
        }
    }else{
        listaCompleta = [].concat(listaCongelados, listaDoces, listaLimpeza, listaFrutas, listaCereais, listaLaticinios);
        console.log('Lista de compras completa: ' + listaCompleta);

    }

}
