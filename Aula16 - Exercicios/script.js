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
        res.innerHTML = ''
    }  else {
        alert("Valor invalido ou já encontrado na lista")
    }

    num.value = ""
    num.focus()
}

function finalizar () {
    if(valores.length == 0){
        alert("Adicione valores antes de finalizar!")
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        var soma = 0;
        var media = 0
        
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } else if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/total
  
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O Maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O Menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A Soma dos valores adicionados é ${soma};</p>`
        res.innerHTML += `<p>A Média dos valores é ${media}</p>`
    }
}