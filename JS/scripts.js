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

      /**usando esse metodo, o numero vai estar sempre no digito */
      this.currentOperation = digit
      this.updateScreen()

  
    }

    /**Muda o numero na tela da calculadora */
    updateScreen(){

      /** += serve para concatenar */
      this.currentOperationText.innerText += this.currentOperation;
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
      calc.addDigit(value);
    } else {
      console.log("OP :" + value);
    }
  })
})
