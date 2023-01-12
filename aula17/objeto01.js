let amigo = {nome: 'José', 
sexo: 'M',
peso: 85.4,
engorda(p=0){
    console.log('engordou')
    this.peso += p
}
}

amigo.engorda(2)
console.log(`${amigo.nome} Pesa ${amigo.peso}kg`)