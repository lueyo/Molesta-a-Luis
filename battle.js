let batallador=document.querySelector(".batallador");
let title=document.querySelector(".title");
title.textContent="Menú";
let boton1=document.querySelector(".boton1");
let boton0=document.querySelector(".boton0");
let boton2=document.querySelector(".boton2");
let titulofen=document.querySelector(".titulofen");
let reinibattle=document.querySelector(".reinibattle");
let cps=0;
let clicks=0;
let ofenclicks=0;
let ms=0;
let divclicks=document.querySelector(".divclicks");
clicksplayer=0;
clicksrival=0;
let velocidad=0;
let molesta=document.querySelector(".molesta");
let d=100;
let counter=-1;
batallador.addEventListener("click", ()=> {clicks++
clicksplayer++
});
function update(){ 
    document.querySelector(".cps").textContent="CPS "+cps;
};
setInterval(()=>{ms+=1000
    cps =Math.round((clicks / (ms/1000)));
    if(batallador.getAttribute("src")=="ofen.png"||"pedro.png"){
     counter--;
    }
     update();
 }, 1000)
 setInterval(()=>{
   
    if (counter==0){
        divclicks.style.display="none"
        if (clicksrival<clicksplayer){
            document.querySelector(".titulofen").textContent="Ganaste"
            
        }
        else{
            document.querySelector(".titulofen").textContent="Perdiste"
        }
    }
    cps=0;
    clicks=0;
    ms=0;
},1000)
setInterval(()=>{
    document.querySelector(".tusclicks").textContent="Tus clicks: "+clicksplayer;
    document.querySelector(".clicksrival").textContent="Clicks rival: "+clicksrival;
}
,10
)
setInterval(()=>{
    if (batallador.getAttribute("src")=="pedro.png"){
        
        clicksrival+=Math.floor((Math.random() * 4) + 1);
    }
    if(batallador.getAttribute("src")=="ofen.png"){
    clicksrival+=Math.floor((Math.random() * 6) + 1);
}},500)
boton1.addEventListener("click",()=>{
    counter=15;
    batallador.setAttribute("id", "ofen");
    batallador.setAttribute("src", "ofen.png");
    titulofen="Ofendedor";
    boton1.style.display="none";
    title.textContent="Ofendedor";
    boton0.style.display="none";
    boton2.style.display="none";
    reinibattle.style.display="inline";
    divclicks.style.display="inline"
    document.querySelector(".titulofen").textContent="Ofendedor"



    
})
reinibattle.addEventListener("click",()=>{
    batallador.setAttribute("id", "");
    batallador.setAttribute("src", "");
    titulofen="Elige el boss";
    clicksrival=0;
    title.textContent="Menú";
    clicksplayer=0;
    counter=-1;
    boton1.style.display="inline";
    boton0.style.display="inline";
    boton2.style.display="inline";
    reinibattle.style.display="none";
    divclicks.style.display="none"    
    document.querySelector(".titulofen").textContent="Elige el boss"
})
boton0.addEventListener("click",()=>{
    window.location.href="luis.html"
    
})
boton2.addEventListener("click",()=>{
    batallador.setAttribute("id", "pedro");
    counter=20
    batallador.setAttribute("src", "pedro.png");
    titulofen.textContent="Pedro Sánchez";
    title.textContent="Pedro Sánchez";
    boton1.style.display="none";
    boton0.style.display="none";
    boton2.style.display="none";
    reinibattle.style.display="inline";
    divclicks.style.display="inline";
    subtitulo.textContent="Este rival te roba los clicks por segundo para usarlos el";
    document.querySelector(".titulofen").textContent="Pedro Sánchez"
})
setInterval(()=>{
    clicksrival+=Math.round(clicksplayer/5);
},5000)