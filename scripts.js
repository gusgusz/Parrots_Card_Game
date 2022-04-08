let qtdCartas;
let cartasEscolha =[];

let metal = [`<div class="content-parrot">
<img class="parrot-img"  src="imagens/front.png"> 
</div>`,`<div class="content-parrot">
<img class="parrot-img"  src="imagens/metalparrot.gif"> 
</div>`];
let revertit = [`<div class="content-parrot">
<img class="parrot-img"  src="imagens/front.png"> 
</div>`,`<div class="content-parrot">
<img class="parrot-img"  src="imagens/revertitparrot.gif"> 
</div>`];
let triplets =[`<div class="content-parrot">
<img class="parrot-img"  src="imagens/front.png"> 
</div>`, `<div class="content-parrot">
<img class="parrot-img"  src="imagens/tripletsparrot.gif"> 
</div>`];
let unicorn = [`<div class="content-parrot">
<img class="parrot-img"  src="imagens/front.png"> 
</div>`,`<div class="content-parrot">
<img class="parrot-img"  src="imagens/unicornparrot.gif"> 
</div>`];
let fiesta = [`<div class="content-parrot">
<img class="parrot-img"  src="imagens/front.png"> 
</div>`,`<div class="content-parrot">
<img class="parrot-img"  src="imagens/fiestaparrot.gif"> 
</div>`];
let bob =[`<div class="content-parrot">
<img class="parrot-img"  src="imagens/front.png"> 
</div>`, `<div class="content-parrot">
<img class="parrot-img"  src="imagens/bovrossparrot.gif"> 
</div>`];
let explody = [`<div class="content-parrot">
<img class="parrot-img"  src="imagens/front.png"> 
</div>`,`<div class="content-parrot">
<img class="parrot-img"  src="imagens/explodyparrot.gif"> 
</div>`];

function comparador() { 
    return Math.random() - 0.5; 
}


let cartas = [metal,metal, revertit,revertit, triplets, triplets, unicorn,unicorn,fiesta, fiesta,bob, bob, explody, explody];


function embaralhar() {
    for( let i =0; cartasEscolha.length < qtdCartas; i++){
        cartasEscolha[i] = cartas[i];

    }
    cartasEscolha.sort(comparador);
    console.log(cartasEscolha.length)

}


function darCartas() {
    console.log(qtdCartas)
    qtdCartas = prompt("Com quantas cartas quer jogar?") ;


    if(qtdCartas %2 == 0 && qtdCartas<15 && qtdCartas>3)  {
        
       document.querySelector(".primeiro-aviso").classList.add("escondido");
       embaralhar();
       
       for(let i=0; i<cartasEscolha.length;i++){
        document.querySelector(".content .content-cards").innerHTML += cartasEscolha[i][0];
        
       }  
        
    }
   
    else {
        alert("você deve escolher numeros pares de 4 a 14!");
        qtdCartas = 0;
        darCartas();
    }   
    
    // for(let i=0;i<qtdCartas;i++){

    //     let cartas = document.querySelector(".content .content-cards");
    //     cartas.innerHTML += `
    //      <div class="content-parrot">
    //      <img class="parrot-img"  src="imagens/front.png"> 
    //     </div>`;
    // }
}

