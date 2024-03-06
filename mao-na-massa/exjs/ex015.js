let area;
let biblioteca;
let linguagem;
let opcaoCarreira;
let listaDeEscolhas = [];

// Ask for area
while (area !== "1" && area !== "2") { 
    area = prompt("Qual é a sua área de atuação, front-end [1] ou Back-end [2]?");
    if (area === "1") {
        document.querySelector('#header').innerHTML = "O desenvolvimento web front-end é o desenvolvimento da interface gráfica do usuário de um site por meio do uso de HTML, CSS e JavaScript para que os usuários possam visualizar e interagir com esse site."
        biblioteca = prompt("Você quer aprender React [1] ou Vue [2]?");
        if (biblioteca === "1") {
            document.querySelector('#phrase').innerHTML = "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
        }else if (biblioteca === "2") {
            document.querySelector('#phrase').innerHTML = "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única."
        }else{
            alert("Por favor, escolha uma opção válida.");
        }
    }else if (area === "2") {
        document.querySelector('#header').innerHTML = "O desenvolvimento web back-end é o desenvolvimento da parte do site que não é visível para os usuários. O back-end é composto por um servidor, um banco de dados e aplicativos de computador."
        linguagem = prompt("Você quer aprender Java [1] ou C# [2]?");
        if (linguagem === "1") {
            document.querySelector('#phrase').innerHTML = "Java é uma linguagem de programação e plataforma computacional lançada pela primeira vez pela Sun Microsystems em 1995."
        }else if (linguagem === "2") {
            document.querySelector('#phrase').innerHTML = "C# é uma linguagem de programação orientada a objetos, desenvolvida pela Microsoft."
        }else{
            alert("Por favor, escolha uma opção válida.");
        }
    }


    if (area !== "1" && area !== "2"){
        alert("Por favor, escolha uma opção válida.");
    }
}


// Log to console
console.log(message)