let batallador=document.querySelector(".batallador");
let title=document.querySelector(".title");
title.textContent="Menú";
let boton1=document.querySelector(".boton1");
let boton0=document.querySelector(".boton0");
let boton2=document.querySelector(".boton2");
let boton3=document.querySelector(".boton3");
let boton4=document.querySelector(".boton4");
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
let container=document.querySelector(".container")
batallador.addEventListener("click", ()=> {clicks++
clicksplayer++

});
batallador.style.display="none";
function update(){ 
    document.querySelector(".cps").textContent="CPS "+cps;
};
setInterval(()=>{ms+=1000
    cps =Math.round((clicks / (ms/1000)));
    if(batallador.getAttribute("src")!=""){
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
    if (batallador.getAttribute("src")=="pedro.jpg"){
        
        clicksrival+=Math.floor((Math.random() * 4) + 1);
    }
    if(batallador.getAttribute("src")=="ofen.jpg"){
    clicksrival+=Math.floor((Math.random() * 6) + 1);
}},500)
setInterval(()=>{ 
       if(batallador.getAttribute("src")=="diego.jpg"){
        clicksrival+=Math.floor((Math.random() * 6) + 5);
    }},1000)

setInterval(()=>{ 
        if(batallador.getAttribute("src")=="adria.jpg"){
         clicksrival+=Math.floor((Math.random() *2.5 ) + 1);
     }},250)

boton1.addEventListener("click",()=>{
    counter=15;
    batallador.setAttribute("id", "ofen");
    batallador.setAttribute("src", "ofen.jpg");
    titulofen="Ofendedor";
    title.textContent="Ofendedor";
    esconderbotones();
    reinibattle.style.display="inline";
    divclicks.style.display="inline"
    document.querySelector(".titulofen").textContent="Ofendedor"
    batallador.style.display="inline";
    container.style.backgroundImage="url('fondofen.jpg')";
    


    
})
reinibattle.addEventListener("click",()=>{
    batallador.setAttribute("id", "");
    batallador.setAttribute("src", "");
    titulofen="Elige el boss";
    clicksrival=0;
    title.textContent="Menú";
    clicksplayer=0;
    counter=-1;
    mostrarbotones();
    reinibattle.style.display="none";
    divclicks.style.display="none"    
    document.querySelector(".titulofen").textContent="Elige el boss"
    batallador.style.display="none"
    container.style.backgroundImage="url('cole.jpg')";
})
boton0.addEventListener("click",()=>{
    window.location.href="luis.html"
    
})
boton2.addEventListener("click",()=>{
    batallador.setAttribute("id", "pedro");
    counter=20
    batallador.setAttribute("src", "pedro.jpg");
    titulofen.textContent="Pedro Sánchez";
    title.textContent="Pedro Sánchez";
    batallador.style.display="inline";
    esconderbotones();
    reinibattle.style.display="inline";
    divclicks.style.display="inline";
    container.style.backgroundImage="url('psoe.jpg')";
    subtitulo.textContent="Este rival te roba los clicks por segundo para usarlos el";
    document.querySelector(".titulofen").textContent="Pedro Sánchez";
    container.style.backgroundImage="url('pedro.jpg')";
})
boton3.addEventListener("click",()=>{
    batallador.setAttribute("id", "diego");
    counter=25;
    batallador.setAttribute("src", "diego.jpg");
    titulofen.textContent="Momazos Diego";
    title.textContent="Momazos Diego";
    batallador.style.display="inline";
    esconderbotones();
    reinibattle.style.display="inline";
    divclicks.style.display="inline";
    document.querySelector(".titulofen").textContent="Momazos Diego";
    container.style.backgroundImage="url('fondobi.jpg')";});

boton4.addEventListener("click",()=>{
    batallador.setAttribute("id", "adria");
    counter=30;
    batallador.setAttribute("src", "adria.jpg");
    titulofen.textContent="Libertad y lo que Surja";
    title.textContent="Libertad y lo que Surja";
    batallador.style.display="inline";
    esconderbotones();
    reinibattle.style.display="inline";
    divclicks.style.display="inline";
    document.querySelector(".titulofen").textContent="Libertad y lo que Surja";
    container.style.backgroundImage="url('ancap.jpg')";});

setInterval(()=>{
    if (batallador.getAttribute("src")=="pedro.jpg"){
    clicksrival+=Math.round(clicksplayer/5)}
},5000)
function esconderbotones(){
    boton1.style.display="none";
    boton0.style.display="none";
    boton2.style.display="none";
    boton3.style.display="none";
    boton4.style.display="none";
}
function mostrarbotones(){
    boton1.style.display="inline";
    boton0.style.display="inline";
    boton2.style.display="inline";
    boton3.style.display="inline";
    boton4.style.display="inline";
}