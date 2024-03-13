function concatenaArray(array1, array2) {
    return array1.concat(array2);
}

array1 = [1, 2, 3, 4, 5];
array2 = [6, 7, 8, 9, 10];

numeros = concatenaArray(array1, array2);

parteNumeros = numeros.slice(3, 7);
//console.log(parteNumeros); // [4, 5, 6, 7]
//console.log(concatenaArray(array1, array2)); // [1, 2, 3, 4, 5, 6]