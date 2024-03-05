function checaMaior(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    if(num2 > num1 && num2 > num3){
        return num2;
    }
    if(num3 > num1 && num3 > num2){
        return num3;
    }
}

function checaMaiorPreguiçoso(num1, num2, num3){
    return Math.max(num1, num2, num3);
}

console.log(checaMaior(1, 2, 3));
console.log(checaMaiorPreguiçoso(1, 2, 3));