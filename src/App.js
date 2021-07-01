import './Buttons.css'

const App = () => {

  let numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandText = document.querySelector('[data-previous-operand]')
  const currentOperandText = document.querySelector('[data-current-operand]')
  console.log(numberButtons);
  console.log(operationButtons);

  class Calculator {
    constructor(previousOperandText, currentOperandText) {
      this.previousOperandText = previousOperandText
      this.currentOperandText = currentOperandText
      this.allclear()
    }

    allclear() {
      this.currentOperand = '0'
      this.previousOperand = '0'
      this.operation = undefined
    }

    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    addNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.calculate()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }

    calculate() {
      let calculation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          calculation = prev + current
          break
        case '-':
          calculation = prev - current
          break
        case '*':
          calculation = prev * current
          break
        case '÷':
          calculation = prev / current
          break
        default:
          return
      }
      this.currentOperand = calculation
      this.operation = undefined
      this.previousOperand = ''
    }

    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }

    updateDisplay() {
      this.currentOperandText.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandText.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandText.innerText = ''
      }
    }
  }

  const calculator = new Calculator(previousOperandText, currentOperandText)

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.addNumber(button.innerText)
      calculator.updateDisplay()
    })
  });

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  });

  if (equalsButton != null) equalsButton.addEventListener('click', button => {
    calculator.calculate()
    calculator.updateDisplay()
  });

  if (allClearButton != null) allClearButton.addEventListener('click', button => {
    calculator.allclear()
    calculator.updateDisplay()
  });

  if (deleteButton != null) deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  });

  return (

    < div className='calculator-grid' >

      <div className='output'>

        <div data-previous-operand className='previous-operand' ></div>
        <div data-current-operand className='current-operand'></div>

      </div>

      <button data-all-clear className="span-two">AC</button>
      <button data-delete>DEL</button>
      <button data-operation>÷</button>
      <button data-number>1</button>
      <button data-number>2</button>
      <button data-number>3</button>
      <button data-operation>*</button>
      <button data-number>4</button>
      <button data-number>5</button>
      <button data-number>6</button>
      <button data-operation>+</button>
      <button data-number>7</button>
      <button data-number>8</button>
      <button data-number>9</button>
      <button data-operation>-</button>
      <button data-number>.</button>
      <button data-number>0</button>
      <button data-equals className="span-two">=</button>

    </div >

  )
}

export default App;
