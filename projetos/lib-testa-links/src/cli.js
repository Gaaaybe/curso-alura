import pegaArquivo from "./index.js";
import chalk from 'chalk';
import { log } from "console";
import fs from 'fs';

const caminho = process.argv;

function imprimeLista(resultado){
    console.log(chalk.yellow('Lista de Links'), resultado);

}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeLista(resultado);

    }
    else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
            console.log(`${caminho}/${nomeArquivo}`);
            imprimeLista(lista);
        });

    }

}

processaTexto(caminho);