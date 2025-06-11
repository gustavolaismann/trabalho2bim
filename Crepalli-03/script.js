let anoCarro = document.querySelector("#anoCarro");
let valorCarro = document.querySelector("#valorCarro");
let btResultado = document.querySelector("#btResultado");
let resultado = document.querySelector("#resultado");

function detran() {
    let ano = Number(anoCarro.value);
    let valor = Number(valorCarro.value);
    let taxa; 

    if (ano <= 1990) {
        taxa = 0.01;
    } else {
        taxa = 0.015;
    }

    let imposto = valor * taxa;
    resultado.textContent = "O valor do imposto a ser pago é de R$ " + imposto.toFixed(2);
}

btResultado.onclick = detran;
