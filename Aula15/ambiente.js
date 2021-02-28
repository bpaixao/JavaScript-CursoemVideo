let num = [5, 8, 1]

//acrescentar um valor ao vetor
num[3] = 6

//metodo interno que acrescenta valor num array no final
num.push(7)
num.push(3)
num.push(9)

console.log("O Vetor tem os valores", num + "\n") 
num.sort();

/*
//comprimento do array (length), não é um metodo no JS, em outras linguagens sim

console.log(`O tamanho do vetor é ${num.length}` + "\n")

//o metodo sort() coloca em ordem crescente o vetor
console.log(`Vetor ordenado em ordem crescente ${num.sort()}\n`)

//mostrando os numeros do vetor
for(var i =0; i < num.length; i++) {
    console.log(` A posição ${[i]} tem o valor ${num[i]}`)
}

*/


// for - in, outra forma que percorrer o vetor mais simplificada, só para array
for( let i in num){
    console.log(`A posição ${i} no vetor, tem o valor: ${num[i]}`)
}

//buscar valores no vetor - usa-se o indexOf(valor)
//let localiza = num.indexOf(8)

// numero que não exite no array
localiza = num.indexOf(1)


if (localiza == -1) {
    console.log(`\nO valor não foi encontrado`)
} else {
    console.log(`\nO valor está na posição ${localiza}`)
}