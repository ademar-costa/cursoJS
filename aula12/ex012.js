var hora = 2
console.log(`São ${hora} horas`)

if (hora < 12){
    console.log('Bom Dia!')
}else if (hora < 18){
    console.log('Boa Tarde!')
}else if(hora > 1 && hora < 5 ){
    console.log('Boa Madruga!')
}else{
    console.log('Boa Noite!')
}