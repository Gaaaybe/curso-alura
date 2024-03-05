function checaPalindromo(palavra) {
    var reverso = palavra.split('').reverse().join('');
    palavra = palavra.toLowerCase();
    reverso = reverso.toLowerCase();
    if (palavra === reverso) {
        return true;
    } else {
        return false;
    }
}

console.log(checaPalindromo('Arara')); // true
console.log(checaPalindromo('desenvolvimento')); // false