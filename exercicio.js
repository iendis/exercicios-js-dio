
function numeros(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase =  criaSegundaFrase(num1,num2);
    return `${primeiraFrase}, ${segundaFrase}`

}

function criaPrimeiraFrase(num1,num2) {
    let sãoIguais = '';
    if(num1!==num2){
        sãoIguais = "não"
    }
    return `Os numeros ${num1} e ${num2} ${sãoIguais} são iguais`;
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let resultado10 = "menor" ;
    let resultado20 = "menor" ;
    const compara10 = soma > 10;
    const compara20 = soma > 20;


    if(compara10){
        resultado10 = "maior"
    }

    if(compara20){
        resultado20 = "maior"
    }
    
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(numeros(10,9));


//return sãoIguais ? "São iguais" : "Não são iguais" // Operador ternário.