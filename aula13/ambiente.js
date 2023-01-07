/*Na estrutura de repedição simples enquanto a condição for verdadeira 
faça esse bloco de código até que ela seja falsa */
var c = 1
while(c <= 6){ //while ele verifica primeira a condição e depois executa o bloco
    console.log(`testa c ${c}`)
    c++
}
/*Já nessa estrutura de repetição execute o bloco de código antes,
e depois teste a condição */
var a = 1 
do{ //do/while ele executa o bloco de código primeiro e depois testa a condição até que ela seja falsa
    console.log(`testa a ${a}`)
    a++
} while (a <= 6)