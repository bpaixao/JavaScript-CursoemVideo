// Consegue verificar a data do sistema
var agora = new Date();
//recupera dessa data a apenas a hora
var diaSem = agora.getHours();

console.log(`Agora são exatamente ${hora}`)
if (hora > 5 && hora < 12){
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')
}else if(hora >= 19 && hora <= 23) {
        console.log('Boa Noite!')
}else {
    console.log('Boa madrugada :)')
}