function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if(ini.value == 0 || fim.value == 0){
        alert('[ERRO] esta faltando dados!')
        res.innerHTML = 'Impossivel Contar.'
    }else{
        res.innerHTML = 'Contando <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p == 0){
            alert('Passo INVALIDO! (Considerando PASSO 1)')
            p = 1
        }
        if(i < f){
            for(var c = i;i <= f; i += p){
                res.innerHTML += `${i} \u{1F449}`
            }
        }else{
            for(var c = i;i >= f;i -= p){
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

    
}