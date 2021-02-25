function geradorTabuada() {
    //Pegando os elementos do HTML e associando ao JS
    var num = document.getElementById('numero')
    var tab = document.getElementById('selTab')

    //Ferifica se tem numero
    if(num.value.length == 0) {
        alert("Por favor digite um numero!")
    } else {
        //converte a string para int/float
        var n = Number(num.value)
        //contador do while
        var c = 1;
        //limpa a lista do select
        tab.innerHTML = ''

        //contador comeca em 1 e vai até 10
        while (c <= 10) {
            //adiconando uma criação de option para a variavel
            let item = document.createElement('option')
            //valor que conterá na no texto da variavel
            item.text = `${n} X ${c} = ${n*c}`
            //associando ao item tab/select
            item.value = `tab ${c}`
            //adicionando no html
            tab.appendChild(item)
            c++
        }
    }

}