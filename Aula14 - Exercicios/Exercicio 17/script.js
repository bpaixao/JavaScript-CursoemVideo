function geradorTabuada() {
    var num = document.getElementById('numero')
    var tab = document.getElementById('selTab')

    if(num.value.length == 0) {
        alert("Por favor digite um numero!")
    } else {
        var n = Number(num.value)
        var c = 1;
        tab.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }

}