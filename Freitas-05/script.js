let btCalcular = document.querySelector("#btCalcular");

let inputSalario = document.querySelector("#inputSalario");



let h3Resultado = document.querySelector("#h3Resultado");
let h3ResultadoSalario = document.querySelector("#h3ResultadoSalario");




function Calcular() {

let NumSalario = Number (inputSalario.value);



h3ResultadoSalario.textContent =  "Saldo Bancario Medio = " + " R$" + (NumSalario).toFixed(2) + " Reais";



 if(NumSalario <= 200){
        h3Resultado.textContent = " Porcentual de Credito Concedido = Nenhum Credito!!!";

    }else if ( NumSalario >=201 && NumSalario  <= 400 )
    {h3Resultado.textContent = "Porcentual de Credito Concedido = 20% De Credito!!!";

    }else if ( NumSalario >=401 && NumSalario <= 600){
         h3Resultado.textContent = "Porcentual de Credito Concedido = 30% De Credito!!!";

    }else if ( NumSalario >=601){
         h3Resultado.textContent = "Porcentual de Credito Concedido = 40% De Credito!!";
     }

    }

btCalcular.onclick = function(){
    Calcular();
}