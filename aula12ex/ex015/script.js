function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                foto.setAttribute('src','img/criançaM.png')
            }else if (idade < 21){
                foto.setAttribute('src','img/jovemM.png')
            }else if (idade < 50){
                foto.setAttribute('src','img/adultoM.png')
            }else{
                foto.setAttribute('src','img/idosoM.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                foto.setAttribute('src','img/criançaF.png')
            }else if (idade < 21){
                foto.setAttribute('src','img/jovemF.png')
            }else if (idade < 50){
                foto.setAttribute('src','img/adultoF.png')
            }else{
                foto.setAttribute('src','img/idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com anos ${idade}`
        res.appendChild(img)
    }


}