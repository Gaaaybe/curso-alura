import validaCPF  from "./validaCPF.js";
import validaIdade from "./validaIdade.js";

const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", event => event.preventDefault());
});

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
];

function verificaCampo(campo) {
    if(campo.name === "cpf" && campo.value.length >= 11) {
        validaCPF(campo);
    }
    if(campo.name === "aniversario" && campo.value != "") {
        validaIdade(campo);
    }
};