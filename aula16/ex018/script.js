var vetor = []
var num = document.getElementById('txtn')
var res = document.getElementById('res')
var tab = document.getElementById('seltab')
function adc(){ 
    if(num.value == 0){
        alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        if(n >= 1 && n <= 100){
            vetor.push(n)
            var item = document.createElement('option')
            item.text = `Valor ${n} Adicionado`
            tab.appendChild(item)    
        }else{
            alert('Digite um número que esta entre 1 e 100!')
        }
    }
}

function fim(){
    vetor.sort()
    var indice = vetor.length
    res.innerHTML = `<p>Ao todo, temos ${indice} número cadastrados</p>`

    
    var ultimo = vetor.at(-1)
    var primeiro = vetor[0]

    res.innerHTML += `<p> O maior valor informado foi ${ultimo}</p>`
    res.innerHTML += `<p> O menor valor informado foi ${primeiro}</p>`

    var soma = 0 
    for(var i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma/indice}</p>`
}