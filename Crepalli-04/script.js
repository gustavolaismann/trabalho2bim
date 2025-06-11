document.querySelector("#btCalcular").addEventListener("click", function() {
    let salario = Number(document.querySelector("#salario").value);
    let cargo = document.querySelector("#cargo").value;
    let aumento;

    // Definindo percentual de aumento conforme o cargo
    if (cargo === "gerente") {
        aumento = 0.10;
    } else if (cargo === "engenheiro") {
        aumento = 0.20;
    } else if (cargo === "tecnico") {
        aumento = 0.30;
    } else {
        aumento = 0.40; // Para cargos não especificados
    }

    let novoSalario = salario + (salario * aumento);
    let diferenca = novoSalario - salario;

    document.querySelector("#resultado").textContent = 
        `Salário antigo: R$ ${salario.toFixed(2)}
        | Novo salário: R$ ${novoSalario.toFixed(2)}
        | Diferença: R$ ${diferenca.toFixed(2)}`;
});