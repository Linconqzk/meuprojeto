const imgsDestaques = [
    "./assets/img/fifa2.jpg" 
    "./assets/img/brawl1.jpg"
]

let imagemAtual = 1;

const imagem  = document.querySelector("#imagemdestaque")

setInterval(function (){
    imagemAtual++;
    if(imagemAtual >= imgsDestaques.length){
        imagemAtual = 0;
    }

    imagem.src = imgsDestaque[imagematual]
},5000)
