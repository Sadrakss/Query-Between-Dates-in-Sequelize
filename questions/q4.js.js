let somarDigitos = function(numero) {
    let soma = 0;

    while (numero != 0) {
        soma   += numero % 10;
        numero  = parseInt(numero / 10); 
    }

    return soma;
}
//console.log(somarDigitos(2015))
