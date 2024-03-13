let matriz3x3 = [];

for (let i = 0; i < 3; i++) {
    matriz3x3[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz3x3[i][j] = i + j;
    }
}

console.log(matriz3x3); // [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ]

console.log(matriz3x3[1][2]);

matriz3x3[2][1] = 10;
console.log(matriz3x3); // 10
