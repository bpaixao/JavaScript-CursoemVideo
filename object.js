let amigo = {nome:"Bia",
 Sexo:"F", 
 peso: 81,
engordar(p = 0){
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} engordou ${amigo.peso}Kg`)
console.log(amigo.nome.toUpperCase())