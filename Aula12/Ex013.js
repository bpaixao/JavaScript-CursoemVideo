// Consegue verificar a data do sistema
var agora = new Date();
//recupera dessa data a apenas o dia da semana
var diaSem = agora.getDay();

//Melhor usado em expressão, pois se precisar testar algo seria preferivel o IF
switch (diaSem) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("[ERRO] Data invalida!") 

}
