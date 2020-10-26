var obras=["assets/obra1.jpg", "assets/obra2.jpg"]
var descricao = ["Jardim do Palácio do Catete - chafariz com escultura, Aproximadamente 1885, Marco Ferrez", "Vista do Largo da Carioca com o convento de Santo Antônio ao fundo, Aproximadamente 1885, Marco Ferrez"]


function LoadArtWork(){
   let img =  document.querySelector(".art-work-img");
   let num = randomNum()
   img.setAttribute("src", obras[num]);
   imgDescricao =  document.querySelector(".text-infos-gerais");
   imgDescricao.textContent = descricao[num]
   img.setAttribute("width", "60%")
   img.setAttribute("height", "100%")

 
  
}

LoadArtWork()
function lala(){
    console.log("aaaaaa")
}

function randomNum(){
    return Math.floor(Math.random() * obras.length)
}