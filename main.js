// objetivo : retornar uma mensagem personalizada para o usuário
// dentro dos parenteses () vai os parametros da função

function fnMensagem(nome){
    console.log ("Seja bem vindo " + nome + " ao sistema sandbox")
}

// objetivo : receber 2 números e somar os valores
// para passar + de 1 paramentro ( variavel), eu separo eles por virgula.
// E SE eu quiser passar + 1 parametro que valide o "tipo de operação ( +, -, *, /)" ?
// se o usuario passar o valor de operador, faz a escolha dele, se ele não passar
// por padrão é executado a função SOMAR


function fnSoma (numero1, numero2, operador) {
    let resultado = numero1 + numero2

    if (operador == "somar") {
        resultado = numero1 + numero2
    }else if (operador == "subtrair") {
        resultado = numero1 - numero2
    } else if (operador == "multiplicar") {
        resultado = numero1 * numero2
    }else if (operador == "dividir") {
        resultado = numero1 / numero2
    }else {
        // caso nenhum valor seja valido
        console.log ("Valor do operador invalido, calculo zerado !!")
    }

    console.log ("Ao " + operador + ": " + resultado)
    console.log (`teste $`)
}