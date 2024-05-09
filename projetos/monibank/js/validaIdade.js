export default function validaIdade(campo) {
    const nasc = new Date(campo.value);
    if (!validarIdade(nasc)){
        campo.setCustomValidity('O usuario não é maior de idade ')
    }
    validarIdade(nasc);
};

function validarIdade(nasc) {
    const hoje = new Date();
    const dataMais18 = new Date(nasc.getUTCFullYear() + 18, nasc.getUTCMonth(), nasc.getUTCDate());
    
    return hoje >= dataMais18;

};