function contagem() {
    var inicio = document.getElementById('txtI')
    var fim = document.getElementById('txtF')
    var passo = document.getElementById('txtP')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("ERRO - Faltam dados")
    } else{
        res.innerHTML = "Contando: <br>"
        //é necessario converter pois o input traz como String
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if ( p <= 0) {
            alert("Passo invalido! Considerando passo 1")
            p = 1
        }
        if ( i < f ){
            /* o contado recebe o inicio que foi definido pelo usuario, e vai até o fim defido pelo usuario. E incremente a ele mesmo os passos tambem defino pelo usuario.*/
            for(let c = i; c <= f; c += p) {
                // crescente
                res.innerHTML += `${c} \u{1F449}`
            }

        } else {
            //decrecente
            for(let c = i; c >= f; c -=p) {
                res.innerHTML += `${c} \u{1F449}`
            }

        }  res.innerHTML += `\u{1F3C1}`
    }
}