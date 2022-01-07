let luis=document.querySelector(".luis");
let boton=document.querySelector(".boton");
let input=document.querySelector("#input");
let title=document.querySelector(".title");
let xluis=0; let yluis=0
let cps=0;
let clicks=0;
let ms=0;
let velocidad=0;
let molesta=document.querySelector(".molesta");
let d=100;
let direccion=1;
let inputvel=document.querySelector("#inputvel");
inputvel.valueAsNumber=0;
let regreso=document.querySelector(".regreso")
luis.addEventListener("click", ()=> {clicks++
});

function update(){ 
    document.querySelector(".cps").textContent="CPS "+cps;
};

setInterval(()=>{ms+=1000
   cps =Math.round((clicks / (ms/1000)));
    
    update();
}, 1000)
setInterval(()=>{
    d=input.valueAsNumber
    velocidad=inputvel.valueAsNumber
   
    title.textContent="Molesta a Luis, "+cps+" cps "+"dificultad "+d+" velocidad "+velocidad
    if(cps>=d){
        molesta.textContent="GANASTE, TE PEGÓ UNA HOSTIA";
        }
    cps=0;
    clicks=0;
    ms=0;
},1000)

setInterval(()=>{
    luis.style.transform=`translateX(${xluis}vw) translateY(${yluis}vh)`;
    xluis+=direccion*velocidad;
    yluis-=direccion*velocidad;
    if(yluis>=30 || xluis>=30 ||yluis<=-30||xluis<=-30){
    direccion*=(-1);
    }} ,1)

boton.addEventListener("click",()=>{
    molesta.textContent="Molesta a Luis";
    yluis=0;xluis=0;
    inputvel.valueAsNumber=0;
    velocidad=0;
})

regreso.addEventListener("click",()=>{
    window.location.href="index.html";
    
})