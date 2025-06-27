
let prompt = require("prompt-sync")(); // habilitar prompt-sync

let bloque1 = 100;
let bloque2 = 100;
let bloque3 =100;

let unidadesDerretidas = 0;
let minDerrite = 5;
let maxDerrite =20;
let relacionDerrite=0;


function derrite(){
       relacionDerrite = (tempMax-tempMin)/(maxDerrite-minDerrite);
}
derrite();

console.log ("relacion derrite:", relacionDerrite); //borrarlo

let listaTemperatura1 = [];
let listaTemperatura2 = [];
let listaTemperatura3 = [];

function generarTemperatura() {
  for (let i = 0; i < 100; i++) {
    let temperatura = Math.floor(Math.random() * (20 - 40 + 1)) + 40;
    listaTemperatura1[i] = temperatura;
    
  for (let j = 0; j < 100; j++) {
    let temperatura = Math.floor(Math.random() * (20 - 40 + 1)) + 40;
    listaTemperatura2[j] = temperatura;
    }
  for (let h = 0; h < 100; h++) {
    let temperatura = Math.floor(Math.random() * (20 - 40 + 1)) + 40;
    listaTemperatura3[h] = temperatura;
    }

}
}
generarTemperatura();
console.log(listaTemperatura1);
console.log(listaTemperatura2);
console.log(listaTemperatura3);

// deshielo bloque 1

let progresionBloque1=[];
let unidades = 100;
let unidadesderritidas=0;
let numero=0;

function progresionBloque1(){
    let bloque1=[];
    for ( let i = 0; i < progresionBloque1.length; i++) {
 
        if (bloque1 !== 0){
            unidades = listaTemperatura1[i] * relacionDerrite;
            bloque1 [i] = bloque1-unidades;
  }
}
}
progresionBloque1();
console.log(progresionBloque1);