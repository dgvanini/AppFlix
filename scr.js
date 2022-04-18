let botao = document.getElementById("botao-pergunta")
    let botao2 = document.getElementById("botao-pergunta2")
    let botao3 = document.getElementById("botao-pergunta3")
    let botao4 = document.getElementById("botao-pergunta4")
    let botao5 = document.getElementById("botao-pergunta5")
    let botao6 = document.getElementById("botao-pergunta6")
    let botao7 = document.getElementById("botao-pergunta7")
    let botao8 = document.getElementById("botao-pergunta8")

    let menu = document.getElementById("pergunta")
    let menu2 = document.getElementById("pergunta2")
    let menu3 = document.getElementById("pergunta3")
    let menu4 = document.getElementById("pergunta4")
    let menu5 = document.getElementById("pergunta5")
    let menu6 = document.getElementById("pergunta6")
    let menu7 = document.getElementById("pergunta7")
    let menu8 = document.getElementById("pergunta8")

    let imagem = document.getElementById("imagem-pergunta")
    let imagem2 = document.getElementById("imagem-pergunta2")
    let imagem3 = document.getElementById("imagem-pergunta3")
    let imagem4 = document.getElementById("imagem-pergunta4")
    let imagem5 = document.getElementById("imagem-pergunta5")
    let imagem6 = document.getElementById("imagem-pergunta6")
    let imagem7 = document.getElementById("imagem-pergunta7")
   

    function ocultar(){
        if(menu.style.display == "block") {
            menu.style.display = "none"
            imagem.id = "imagem-pergunta"
        } else {
            menu.style.display = "block"
            imagem.id = "imagem-pergunta-girar"
        }

    }
    function ocultar2(){
        if(menu2.style.display == "block") {
            menu2.style.display = "none"
            imagem2.id = "imagem-pergunta2"
        } else {
            menu2.style.display = "block"
            imagem2.id = "imagem-pergunta-girar2"
        }

    }
    function ocultar3(){
        if(menu3.style.display == "block") {
            menu3.style.display = "none"
            imagem3.id = "imagem-pergunta3"
        } else {
            menu3.style.display = "block"
            imagem3.id = "imagem-pergunta-girar3"
        }

    }
    function ocultar4(){
        if(menu4.style.display == "block") {
            menu4.style.display = "none"
            imagem4.id = "imagem-pergunta4"
        } else {
            menu4.style.display = "block"
            imagem4.id = "imagem-pergunta-girar4"
        }

    }
    function ocultar5(){
        if(menu5.style.display == "block") {
            menu5.style.display = "none"
            imagem5.id = "imagem-pergunta5"
        } else {
            menu5.style.display = "block"
            imagem5.id = "imagem-pergunta-girar5"
        }

    }
    function ocultar6(){
        if(menu6.style.display == "block") {
            menu6.style.display = "none"
            imagem6.id = "imagem-pergunta6"
        } else {
            menu6.style.display = "block"
            imagem6.id = "imagem-pergunta-girar6"
        }

    }
    function ocultar7(){
        if(menu7.style.display == "block") {
            menu7.style.display = "none"
            imagem7.id = "imagem-pergunta7"
        } else {
            menu7.style.display = "block"
            imagem7.id = "imagem-pergunta-girar7"
        }

    }


    
    botao.addEventListener("click", ocultar)
    botao2.addEventListener("click", ocultar2)
    botao3.addEventListener("click", ocultar3)
    botao4.addEventListener("click", ocultar4)
    botao5.addEventListener("click", ocultar5)
    botao6.addEventListener("click", ocultar6)
    botao7.addEventListener("click", ocultar7)
    botao8.addEventListener("click", ocultar8)