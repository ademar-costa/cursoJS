function calcular(){
    var incio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    var n1 = Number(incio.value)
    var n2 = Number(fim.value)
    var n3 = Number(passo.value)

    do{
        res.innerHTML = n1
        n1 = n1 + n3
    }while(n1 <= n2)
}