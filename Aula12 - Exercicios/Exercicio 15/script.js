function verificar (){
   var data = new Date();
   var ano = data.getFullYear();
   var anoNasc = document.getElementById("ano")
   var res = document.getElementById("resultado")
   
   if(anoNasc.value.length == 0 || anoNasc.value > ano){
       alert("[ERRO] Verifique os dados e tente novamente!")
   } else {
       var tSexo = document.getElementsByName('sexo')
       var idade = ano - Number(anoNasc.value)
       //res.innerHTML = `Idade calculada ${idade}`

       // Criando uma tag img com id=Foto pelo JS
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

       var genero = ""
       if (tSexo[0].checked){
           genero = "Mulher"
           if (idade >= 0 && idade <= 10){
            //Criança   
                img.setAttribute('src', 'menina.png')
           } else if (idade < 21){
               //adolescente
                img.setAttribute('src', 'adolescente-menina.png')
           } else if (idade < 50) {
               //adulto
               img.setAttribute('src', 'adulta.png')
           } else {
               //idoso
               img.setAttribute('src','idosa.png')
           }
       } else if (tSexo[1].checked){
           genero = "Homem"
           if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','menino.png')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src','adolescente-menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adulto.png')
            } else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       //Adiciona a imagem ao DOM da div res
       res.appendChild(img)
   }


}