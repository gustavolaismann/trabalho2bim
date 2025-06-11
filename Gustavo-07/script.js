let btEnter = document.getElementById("btEnter");
let result = document.getElementById("result");

function calc() {
    
    let preco = +document.getElementById("preco").value;
    let condicaoPagamento = document.getElementById("condicaoPagamento").value;

    let total = 0;
    if (isNaN(preco) || preco <= 0) {
        result.textContent = "Insira um valor válido";
        return;
    }

    switch (condicaoPagamento) {
        case "a":
            total = preco * 0.9;
            break;
        case "b":
            total = preco * 0.85;
            break;
        case "c":
            total = preco;
            break;
        case "d":
            total = preco * 1.10;
            break;
        default:
            result.textContent = "Condição inválida";
            return;
    }

    result.textContent = "Total a pagar: R$ " + total.toFixed(2);
}

btEnter.onclick = function () {
    calc();
};