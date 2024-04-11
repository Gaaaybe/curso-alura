import pegaArquivo from "./index.js";
import chalk from 'chalk';
import fs from 'fs';
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, nomeArquivo = ''){
    if(valida){
        console.log(chalk.yellow(`Lista Validada`), chalk.black.bgGreen(nomeArquivo), await listaValidada(resultado));
    }else{
        console.log(chalk.yellow(`Lista de Links`), chalk.black.bgGreen(nomeArquivo), resultado);}

}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try{
        fs.lstatSync(caminho);
    }catch(erro){
        if(erro.code === 'ENOENT'){
            console.log(chalk.red('Arquivo ou diretório não encontrado.'));
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado);

    }
    else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
            console.log(`${caminho}/${nomeArquivo}`);
            imprimeLista(valida ,lista, nomeArquivo);
        });

    }

}

processaTexto(caminho);