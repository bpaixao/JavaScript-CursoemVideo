//Pegando os elementos do HTML e associando ao JS
var num = document.getElementById('numero')
let lista = document.querySelector('select#fLista')
var res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        false
    }

}

function adicionandoNum() {
    if (isNumero(num.value) && !inLista(num.value, valores))  {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
    }  else {
        alert("Valor invalido ou já encontrado na lista")
    }

    num.value = ""
    num.focus()
}