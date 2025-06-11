let btCalcular = document.querySelector("#btCalcular");

let inputKg = document.querySelector("#inputKg");
let inputaltura = document.querySelector("#inputaltura");


let h3ResultadoValorimc = document.querySelector("#h3ResultadoValorimc");
let h3ResultadoClassificacao = document.querySelector ("#h3ResultadoClassificacao");


function CalcularImc() {

let NumKg = Number (inputKg.value);
let NumAltura = Number (inputaltura.value);
let imc = (NumKg / (NumAltura * NumAltura)) .toFixed(2);


h3ResultadoValorimc.textContent = "IMC = " + (NumKg / (NumAltura * NumAltura)) .toFixed(2) + " Kg/m²";



 if(imc <= 18.5){
        h3ResultadoClassificacao.textContent = "Abaixo do peso!!!";
    }else if ( imc >=18.5 && imc <= 24.9 )
    {
        h3ResultadoClassificacao.textContent = "Peso Normal!!!";
    }else if ( imc >=25 && imc <= 29.9){
         h3ResultadoClassificacao.textContent = "Sobre Peso!!!";
    }else if ( imc >=30 && imc <= 34.9){
         h3ResultadoClassificacao.textContent = "Sobre Obesidade grau 1!!!";
    }else if ( imc >=35 && imc <= 39.9){
         h3ResultadoClassificacao.textContent = "Sobre Obesidade grau 2!!!";
    }else if ( imc >=40){
         h3ResultadoClassificacao.textContent = "Obesidade grau 3!!!";
    }
    }



btCalcular.onclick = function(){
    CalcularImc();
}