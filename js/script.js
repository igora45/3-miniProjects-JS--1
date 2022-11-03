'use strict';

const bodyEl = document.querySelector('body');
const mainEl = document.querySelector('.main');

const todayDate = document.querySelector('.today-date');
const time = document.querySelector('.time');
const btnStartTime = document.querySelector('.btn-start-time');

const inputWeight = document.querySelector('.input-weight');
const inputHeight = document.querySelector('.input-height');
const calcBmi = document.querySelector('.calc-bmi-button');
const resultBmi = document.querySelector('.result-bmi');
const resetBmi = document.querySelector('.reset-bmi-button');

const invalidValue = document.querySelector('.invalid-value');
const invalidValueButton = document.querySelector('.invalid-value-button');

const darkModeDiv = document.querySelector('.dark-mode-div');
const inputDarkMode = document.querySelector('.input-dark-mode');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const boxesContent = document.querySelector('.boxes-content');

const calculatorSection = document.querySelector('.calculator-section');
const btnCalculator = document.querySelectorAll('.btn-calculator');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

const openSidebar = document.querySelector('.sidebar-open-btn');
const closeSidebar = document.querySelector('.sidebar-close-btn');
const sidebarContent = document.querySelector('.sidebar__content-page');
const changeBackgroundColorbtn = document.querySelector(
  '.change-background-color-btn'
);
const goToTimeBtn = document.querySelector('.btn-time');
const goToCalcBmi = document.querySelector('.btn-calc-bmi');
const goToCalculator = document.querySelector('.btn-go-calculator');
const openSidebarFunction = function () {
  sidebarContent.classList.add('show-sidebar-content');
  openSidebar.classList.add('close-open-sidebar');
};
const closeSidebarFunction = function () {
  sidebarContent.classList.remove('show-sidebar-content');
  openSidebar.classList.remove('close-open-sidebar');
};
openSidebar.addEventListener('click', openSidebarFunction);
closeSidebar.addEventListener('click', closeSidebarFunction);

goToTimeBtn.addEventListener('click', () => {
  box1.scrollIntoView({ behavior: 'smooth' });
  closeSidebarFunction();
});
goToCalcBmi.addEventListener('click', () => {
  box2.scrollIntoView({ behavior: 'smooth' });
  closeSidebarFunction();
});
goToCalculator.addEventListener('click', () => {
  calculatorSection.scrollIntoView({ behavior: 'smooth' });
  closeSidebarFunction();
});
goToCalculator.style.background = 'transparent';
changeBackgroundColorbtn.addEventListener('click', () => {
  const x1 = Math.random() * 255 + 1;
  const x2 = Math.random() * 255;
  const x3 = Math.random() * 255;
  mainEl.style.transition = 'none';
  mainEl.style.background = `rgba(0,0,0,0.0)`;
  bodyEl.style.background = `linear-gradient(to top right, rgba(${x1}, ${x2}, ${x3}, 0.7), rgba(${x2}, ${x3}, ${x1}, 0.7)`;
});

document.addEventListener('keydown', e => {
  if (
    e.key === 'Escape' &&
    sidebarContent.classList.contains('show-sidebar-content')
  ) {
    sidebarContent.classList.remove('show-sidebar-content');
    openSidebar.classList.remove('close-open-sidebar');
  }
});
const startTimeAndDate = function () {
  const todaysDate = function () {
    const now = new Date();
    const options = {
      day: '2-digit',
      year: 'numeric',
      month: '2-digit',
    };
    const now1 = new Intl.DateTimeFormat(navigator.language, options).format(
      now
    );

    todayDate.textContent = `today: ${now1}`;
  };
  const dateNow = setInterval(todaysDate, 1000);
  todaysDate();

  todayDate.classList.add('show-date');

  const tick = function () {
    const now = new Date();
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const now1 = new Intl.DateTimeFormat('en-US', options).format(now);
    time.textContent = now1;
  };
  const timeNow = setInterval(tick, 1000);
  tick();
  btnStartTime.remove();
};
btnStartTime.addEventListener('click', startTimeAndDate);

const finalValueCalcBmi = function () {
  if (
    inputWeight.value &&
    inputHeight &&
    inputWeight.value > 0 &&
    inputHeight.value > 0
  ) {
    const calc = function (weight, height) {
      return weight / height ** 2;
    };
    const bmi = calc(inputWeight.value, inputHeight.value).toFixed(2);
    resultBmi.textContent = `Result: ${bmi}`;
  } else {
    invalidValue.classList.add('show-invalid-value');
    invalidValueButton.addEventListener('click', function () {
      invalidValue.classList.remove('show-invalid-value');
    });
  }
};
calcBmi.addEventListener('click', finalValueCalcBmi);

resetBmi.addEventListener('click', function () {
  inputHeight.value = 0;
  inputWeight.value = 0;
  resultBmi.textContent = `Result: 0`;
});

inputDarkMode.checked = JSON.parse(localStorage.getItem('mode'));
mainEl.style.transition = '250ms linear';

const darkMode = function () {
  // DARK MODE ON ======================================
  const calculateButtonDarkOn = function (color, background) {
    btnCalculator.forEach(btn => {
      btn.style.color = color;
      btn.style.background = background;
      btn.style.borderColor = background;
      btn.addEventListener(
        'mouseover',
        () => (btn.style.background = 'rgb(84, 84, 84, 0.7)')
      );
      btn.addEventListener('mouseleave', () => {
        btn.style.background = background;
      });
    });
  };
  const mainElementsOn = function (color, background) {
    bodyEl.style.background = background;
    mainEl.style.background = background;
    mainEl.style.color = color;
  };
  const box1DarkOn = function (color) {
    box1.style.color = color;
    btnStartTime.style.color = color;
    box1.style.background = 'var(--dark-primary)';
    btnStartTime.style.background = 'rgb(87, 1, 95)';
  };
  const box2DarkOn = function (background) {
    box2.style.background = 'var(--dark-secondary)';
    calcBmi.style.background = background;
    resetBmi.style.background = background;
  };
  // DARK MODE OFF ======================================
  const mainElementsOff = function (color, background) {
    bodyEl.style.background = background;
    mainEl.style.background = background;
    mainEl.style.color = color;
  };
  const box1DarkOff = function (color) {
    box1.style.color = color;
    btnStartTime.style.color = color;
    box1.style.background = 'var(--light-primary)';
    btnStartTime.style.background = 'rgb(194, 21, 209)';
  };
  const box2DarkOff = function (background) {
    box2.style.background = 'var(--light-secondary)';
    calcBmi.style.background = background;
    resetBmi.style.background = background;
  };

  const calculateButtonDarkOff = function (color, background) {
    btnCalculator.forEach(btn => {
      btn.style.color = color;
      btn.style.background = background;
      btn.style.borderColor = background;
      btn.addEventListener(
        'mouseover',
        () => (btn.style.background = 'rgba(255, 255, 255, 0.9)')
      );
      btn.addEventListener('mouseleave', () => {
        btn.style.background = background;
      });
    });
  };
  if (inputDarkMode.checked) {
    openSidebar.style.color = 'white';
    mainEl.style.transition = '250ms linear';
    box1DarkOn('lightgray');
    box2DarkOn('lighgray');
    mainElementsOn('lightgray', 'black');
    darkModeDiv.querySelector('h2').color = 'white';
    calculateButtonDarkOn('white', 'rgba(63, 63, 63, 0.7)');
  } else {
    openSidebar.style.color = 'black';
    mainEl.style.transition = '250ms linear';
    box1DarkOff('black');
    box2DarkOff('');
    mainElementsOff('black', 'white');
    darkModeDiv.querySelector('h2').color = 'black';
    calculateButtonDarkOff('black', 'rgba(255, 255, 255, 0.75)');
  }
};

const updateLocalStorage = function () {
  localStorage.setItem('mode', JSON.stringify(inputDarkMode.checked));
};
inputDarkMode.addEventListener('input', function () {
  darkMode();
  updateLocalStorage();
});

//calculator =======
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = String(this.currentOperand).slice(0, -1);
  }
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + String(number);
  }
  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    (this.previousOperand = this.currentOperand), this.operation;
    this.currentOperand = '';
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }

    this.previousOperand = '';
    this.currentOperand = computation;
    this.operation = undefined;
  }

  getDisplayNumber(number) {
    const stringNumber = String(number);
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(operation => {
  operation.addEventListener('click', () => {
    calculator.chooseOperation(operation.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
