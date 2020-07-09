let imprimirNumerosDeUmACinquenta = function(){
    let numeros = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            numeros += "FizzBuzz"
        else if (i % 3 === 0)
            numeros += "Fizz";
        else if (i % 5 === 0)
            numeros += "Buzz";
        else
            numeros += i
    }
    return numeros;
}

console.log(imprimirNumerosDeUmACinquenta());
