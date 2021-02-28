//retorna o fatorial de um numero 
// Ex: 5 = 5 x 4 x 3 x 2 x 1 = 120
function fatorial(n) {
    let fat = 1
    // o contador comeca com o numero solicitado, vai perdendo -- até chegar em 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))