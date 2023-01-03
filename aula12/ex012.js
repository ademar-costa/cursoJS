/* Essa estrutura de desvio condicional aninhada onde tem um if dentro de outro if */

var agora = new Date()
var hora = agora.getHours() //estou pegando a hora atual com esse comando "getHors()"
console.log(`São ${hora} horas`)

if (hora > 12 && hora < 18){
    console.log('Boa Tarde!')
}else if (hora < 12 && hora > 5){
    console.log('Bom Dia!')
}else if(hora > 18 && hora <= 23){
    console.log('Boa Noite!')
}else if(hora >= 0 && hora <= 5){ 
    console.log('Boa Madrugada!')
}else{
    console.log('Horas INVALIDAS')
}