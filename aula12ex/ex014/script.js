function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("imagem") 
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Horas!`
    if (hora >= 0 && hora < 12){
        img.src = 'img/manha.png'
        document.body.style.background = '#7AFF5C'
    }else if(hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#FAA133'
    }else {
        img.src = 'img/noite.png'
        document.body.style.background = '#6C60FF'
    }
}