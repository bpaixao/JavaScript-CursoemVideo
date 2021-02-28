function adicionandoNum() {
    //Pegando os elementos do HTML e associando ao JS
    var num = document.getElementById('numero')
    var tab = document.getElementById('selTab')

    //Verifica se tem numero
    if(num.value.length == 0 || num.value.length > 100) {
        alert("Por favor digite um numero valido!")
    }

}