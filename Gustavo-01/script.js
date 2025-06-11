let inputNumberOne = document.querySelector("#inputNumberOne");
let inputNumberTwo = document.querySelector("#inputNumberTwo");
let inputNumberThree = document.querySelector("#inputNumberThree");
let btEnter = document.querySelector("#btEnter");
let result = document.querySelector("#result");



function triangle(){
    let a = +document.getElementById("inputNumberOne").value;
    let b = +document.getElementById("inputNumberTwo").value;
    let c = +document.getElementById("inputNumberThree").value;
    
    if(a <= 0 || b <= 0 || c <= 0){
        result.textContent = "Os lados devem ser maiores do que zero.";
    } else if (a+b>c && a+c>b && c+b>a){
        if (a === b && b === c){
            result.textContent = "É um triangulo equilatero";
        } else if(a == b || a === c || b === c ){
            result.textContent = "É um triangulo isosceles";
        } else{ 
            result.textContent = "É um triangulo escaleno";
        }
    } else {
        result.textContent = "Não formam Triangulo"
    };}

btEnter.onclick = triangle;