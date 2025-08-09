let num1 = prompt("Digite o primeiro numero");
let num2 = prompt("Digite o segundo numero");
let operator = prompt("Digite o operador (+, -, *, /)");

switch(operator) {
    case "+":
        console.log("Resultado: " + (num1 + num2));
        break;
    case "-":
        console.log("Resultado: " + (num1 - num2));
        break;
    case "*":
        console.log("Resultado: " + (num1 * num2));
        break;
    case "/":
        if (num2 === 0){
            console.log("Não é possível realizar divisão por zero");
        } else {
            console.log("Resultado: " + (num1 / num2));
        }
        break;
    default:
        console.log("Operador inválido");
}