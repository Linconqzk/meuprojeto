const imgsDestaques = [
    "./assets/img/OIP.webp",
     "./assets/img/baixados.webp",
]

let imagemAtual = 1;

const imagem  = document.querySelector("#imagemdestaque")

setInterval(function (){
    atual++;
    if(imagemAtual >= imgsDestaques.length){
        imagemAtual = 0;
    }

    imagem.src = imgsDestaque[imagematual]
},5000)
