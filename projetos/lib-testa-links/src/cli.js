import pegaArquivo from "./index.js";
import chalk from 'chalk';
import fs from 'fs';

const caminho = process.argv;

function imprimeLista(resultado, nomeArquivo = ''){
    console.log(chalk.yellow(`Lista de links`), chalk.black.bgGreen(nomeArquivo), resultado);

}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3];
    console.log(valida)

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
        imprimeLista(resultado);

    }
    else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
            console.log(`${caminho}/${nomeArquivo}`);
            imprimeLista(lista, nomeArquivo);
        });

    }

}

processaTexto(caminho);