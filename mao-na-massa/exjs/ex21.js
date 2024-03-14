const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

console.log(frutas); // [ 'Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi' ]

// Remove 2 elementos a partir da posição 1 e adiciona 'kiwi' e 'pessêgo'

frutas.splice(1, 2, 'kiwi', 'pessêgo');

console.log(frutas); // [ 'Maçã', 'kiwi', 'pessêgo', 'Limão', 'Abacaxi' ]

frutas.forEach((fruta)=>console.log(`[${frutas.indexOf(fruta)}]: ${fruta}`));