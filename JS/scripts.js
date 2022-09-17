const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");


/**Construtor igual ao paradigma de orientação ao objeto */
class Calculator {
  /** */
    constructor(previousOperationText, currentOperationText) {
      /**Instanciamos esses objetos para tranformar-los em propriedades do objeto para semopre estar trabalhando com orientação de objeto */
      this.previousOperationText = previousOperationText;
      this.currentOperationText = currentOperationText;
      /**Esse valor representa o que o usuário está digitando atualmente na tela */
      this.currentOperation = "";
    }
  

    /**Método para inserir numeros */
    addDigit(digit) {

      console.log(digit);
    /*irá checar se o numero no visor ja tem um ponto*/
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

      /**usando esse metodo, o numero vai estar sempre no digito */
      this.currentOperation = digit
      this.updateScreen()

  
    }

  /**Aqui iremos inserir os processos da calculadora */
  processOperation(operation) {
    /**Checa se o valor está vazio */
    if (this.currentOperationText.innerText === "" && operation !== "C") {
      /*alterar opreação*/
      if (this.previousOperationText.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    }

    
    let operationValue;
    let previous = +this.previousOperationText.innerText.split(" ")[0];
    let current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        this.processClearCurrentOperator();
        break;
      case "C":
        this.processClearOperator();
        break;
      case "=":
        this.processEqualOperator();
        break;
      default:
        return;
    }
  }
  /*muda o numero da tela da calculadora*/
  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      /*insere o numero ao valor atual*/
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      /*checa se o valor é zero, se for, atribui ao valor atual da opreação*/
      if (previous === 0) {
        operationValue = current;
      }
      
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }

/*muda opreação matemática*/
 changeOperation(operation) {
  const mathOperations = ["*", "-", "+", "/"];

  if (!mathOperations.includes(operation)) {
    return;
  }

  this.previousOperationText.innerText =
    this.previousOperationText.innerText.slice(0, -1) + operation;
}
  /**deleta um numero */
  processDelOperator() {
    this.currentOperationText.innerText =
      this.currentOperationText.innerText.slice(0, -1);
  }

  /**limpa operação atual */    
    processClearCurrentOperator() {
      this.currentOperationText.innerText = "";
    }
  /*limpa opreações*/
  processClearOperator() {
    this.currentOperationText.innerText = "";
    this.previousOperationText.innerText = "";
  }

  /**Processa opreações */
  processEqualOperator() {
    let operation = this.previousOperationText.innerText.split(" ")[1];

    this.processOperation(operation);
  }
}

  const calc = new Calculator(previousOperationText, currentOperationText);
    

  buttons.forEach((btn) => {
  /*com isso eu ativo os eventos para serem usados nos botões, o (e) significa o evento de pressionar o botão*/
  btn.addEventListener("click", (e) => {
    /*com isso, todo valor que o usuário apretar, vai ser retornado um valor de texto que será usado para realizar as operações*/
    const value = e.target.innerText;
/**Com o o operador de +, ele irá tentar converter o valor recebido em um numero */
/**Com esse if else eu consigo distinguir o operador dos numeros */
    if (+value >= 0 || value === "."){
      /**Adicionamos o digito a tela */
      console.log(value);
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});
