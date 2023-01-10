var num = [5,8,9,3] //Criei um vetor(arry)
num.push(1) //Adicionei o número "1" dentro do meu arry
num.sort() //Coloquei em ordem crescente os número dentro do meu arry 
console.log(num) //Mostrei no meu console todos os valores dentro do arry
console.log(`O vetor tem ${num.length} posições`) // Com o comando "length" mostrei a quantidade de dados dentro do meu arry
console.log(`O primeiro valor é ${num[0]}`) // E aqui eu acessei o valor na posição zero dentro do meu arry

let pos = num.indexOf(9) // O comando "indexOf" mostra a posição de um dado no arry
console.log(`o valor 9 esta na posição ${pos}`)