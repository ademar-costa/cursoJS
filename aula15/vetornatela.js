var valores = [8,1,7,4,2,9]
console.log('Forma tradicional de exibir um arry')

for( var pos=0; pos < valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
console.log('<------------------------------------->')
/*
    No comando "for" é possivel simplificar o código para variável composta e objetos.
    O código acima tem a mesma funcionalidade que o código a baixo, só que mais otimizado.
*/

console.log('Forma otimizada de mostra um arry!')
//PARA cada posição EM valores(na variável composta) eu vou mostra valores[pos]
for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}