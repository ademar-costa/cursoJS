function gerar(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if(num.value == 0){
        alert('Por Favor Digite um Número!')
    }else{
        var x = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${x} X ${c} = ${x*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}