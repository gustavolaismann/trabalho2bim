let inputProduto = document.querySelector("#inputProduto");
let inputQuantidade = document.querySelector("#inputQuantidade");

let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function calcular(){

let numProduto = Number (inputProduto.value);
let numQuantidade = Number (inputQuantidade.value);
 

if( numProduto === 1){
    h3Resultado.textContent = "Pedido = " + numQuantidade + " Cachorro Quente, " + "Valor Total = " +"R$"+(11.50 * numQuantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
} else if( numProduto === 2){
     h3Resultado.textContent ="Pedido = " + numQuantidade + " Bauru, " + "Valor Total = " +"R$"+ (8.50 * numQuantidade).toFixed(2)
}else if( numProduto === 3){
     h3Resultado.textContent = "Pedido = " + numQuantidade + " Misto Quente, " + "Valor Total = " +"R$"+ (8.00 * numQuantidade).toFixed(2)

}else if( numProduto === 4){
     h3Resultado.textContent = "Pedido = " + numQuantidade + " Hamburguer, " + "Valor Total = " +"R$"+ (9.00 * numQuantidade).toFixed(2)
}else if( numProduto === 5){
     h3Resultado.textContent = "Pedido = " + numQuantidade + " Cheeseburguer, " + "Valor Total = " +"R$"+(10.00 * numQuantidade).toFixed(2)
} else if( numProduto === 6){
     h3Resultado.textContent = "Pedido = " + numQuantidade + " Refrigerante, " + "Valor Total = " +"R$"+ + (4.50 * numQuantidade).toFixed(2)
}

}
btCalcular.onclick = function (){
    calcular();
}