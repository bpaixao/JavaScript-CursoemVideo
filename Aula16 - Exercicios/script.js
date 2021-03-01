function adicionandoNum() {
    //Pegando os elementos do HTML e associando ao JS
    var num = document.getElementById('numero')
    var tab = document.getElementById('selTab')

    //Verifica se tem numero
    if(num.value == 0 || num.value > 100) {
        alert("Por favor digite um numero válido!")
    } else {
        var n = Number(num.value)
        var vetor = []
        var c = 1;
       
        //contador comeca em 1 e vai até 10
        while (c <= 1) {
            
            vetor.push(n)
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            item.value = `tab ${c}`
            //adicionando no html
            tab.appendChild(item)
            c++
        }

       console.log(vetor)
        
        
    }

}