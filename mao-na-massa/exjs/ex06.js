let nulo = {};
let indefinido;

console.log(`Valor nulo: ${typeof nulo}\nValor indefinido: ${typeof indefinido}`)

console.log( null === undefined ); // 
console.log(null == undefined) // Considera True por conta do contexto de Falsy, pois são valores indefinidos

console.log(1 == "1");
console.log(1 === '1');

console.log( " \t\r\n" == 0 );
console.log( '' == 0 );