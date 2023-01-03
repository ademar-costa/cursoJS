/* Esse exercicio é sobre desvio condicional multiplas, é usando para tomada de decisão com
valores fixo, ou seja que não vai ter alteração
A Sintaxe :
    switch(expressão){
        case valor1:
        break
        case valor2:
        break
        case valor3:
        break
        default:
        break
    }
Se nem um dos valores for verdadeiro execute o "DEFAULT"
Todo final de bloco "CASE" tem que termina com "BREAK"
*/

var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    case 3: 
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log("Dia INVALIDO")
        break
}