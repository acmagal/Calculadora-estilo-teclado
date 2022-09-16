const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

console.log(buttons);

class Calculator {
    constructor() {
      
    }
  
    /*Adiciona um digito na tela da calculadora*/
    addDigit(digit) {
      console.log(digit);
      // Check if number already has a dot
      if (digit === "." && this.currentOperationText.innerText.includes(".")) {
        return;
      }
  
      this.currentOperation = digit;
      this.updateScreen();
    }
}