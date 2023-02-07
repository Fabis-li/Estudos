function calcularValores() {
    let num1 = parseFloat(document.getElementById("txtValor1").value);
    let num2 = parseFloat(document.getElementById("txtValor2").value);
    let operador = document.getElementById("cbxOperacao").value;
    let mostrarResultado = document.getElementById("txtResultado");
    let resultado = 0;
  
    switch (operador) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "/":
        resultado = num1 / num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
    }
  
    mostrarResultado.innerHTML = resultado;
  }
  