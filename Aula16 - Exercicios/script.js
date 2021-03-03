//Pegando os elementos do HTML e associando ao JS
var num = document.getElementById('numero')
var tabela = document.getElementById('tabela')
var res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inTabela(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        false
    }

}


function adicionandoNum() {
    if (isNumero(num.value) && !inTabela(num.value))  {
        

    }  else {
        alert("Valor invalido ou já encontrado na lista")
    }

}