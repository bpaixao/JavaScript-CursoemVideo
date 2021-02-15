function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora > 5 && hora < 12) {
        //Bom dia
        img.src = "teste-manha.png"
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = "teste-tarde.png"
    } else if (hora >= 19 && hora <= 23) {
        //Boa noite
        img.src = "teste-noite.png"
    } else {
        //Boa madrugada
        img.src = "teste-noite.png"
    }

}