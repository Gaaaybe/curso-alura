function executaOperacaoEmArray(array, callback){
    array.forEach((element) => {
        console.log(callback(element))
    });
}

const array = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

executaOperacaoEmArray(array, (element) => {
    return element *3;
}); // [ 57, 60, 63, 66, 69, 72, 75, 78, 81, 84 ]