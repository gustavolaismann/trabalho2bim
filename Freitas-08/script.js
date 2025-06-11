let btCalcular = document.querySelector ("#btCalcular");
let inputNivel = document.querySelector ("#inputNivel");
let inputHoras = document.querySelector ("#inputHoras");

let h3Resultado = document.querySelector ("#h3Resultado");

function calcular(){

let NumNivel = Number (inputNivel.value);
let NumHoras = Number (inputHoras.value);


 if(NumNivel === 1){
 h3Resultado.textContent = "Valor do Salario Professor Nivel 1 = " + "R$" + ((NumHoras * 12) * 4.5).toFixed(2) + " Reais"
 }
  else if(NumNivel === 2){ 
    h3Resultado.textContent = "Valor do Salario Professor Nivel 2 = " + "R$" + ((NumHoras * 17) * 4.5).toFixed(2)  + " Reais"
 } else if (NumNivel === 3){
    h3Resultado.textContent = "Valor do Salario Professor Nivel  3 = " + "R$" +  ((NumHoras * 25) * 4.5).toFixed(2)  + " Reais"
 }

}

 btCalcular.onclick = function (){

     calcular();

 }