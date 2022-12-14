
// const lastName = prompt("Siapa nama belakangmu?");
// const language = prompt("Bisa berbahasa apa?");
 
// const user = {
//    name: {
//        first: firstName,
//        last: lastName,
//    },
//    language: language
// };
 
// if (user.language === "English") {
//    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "French") {
//    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "Japanese") {
//    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
// } else {
//    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
// }
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
  };
   
  function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
  }
   
  function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
  }
   
  function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
      calculator.displayNumber = digit;
    } else {
      calculator.displayNumber += digit;
    }
  }
   
  
  function inverseNumber() {
    if (calculator.displayNumber === '0') {
      return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
  }
   
  function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
      calculator.operator = operator;
      calculator.isWaitForSecondNumber = true;
      calculator.firstNumber = calculator.displayNumber;
      calculator.displayNumber = '0';
    } else {
      alert('Operator sudah ditetapkan');
    }
  }
   
  function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
      alert('Anda belum menetapkan operator');
      return;
    }
   
    let result = 0;
    if (calculator.operator === '+') {
      result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
      result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
   
    calculator.displayNumber = result;
  }
   
  const buttons = document.querySelectorAll('.button');
  for (const button of buttons) {
    button.addEventListener('click', function (event) {
      // mendapatkan objek elemen yang diklik
      const target = event.target;
   
      if (target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
      }
   
      if (target.classList.contains('negative')) {
        inverseNumber();
        updateDisplay();
        return;
      }
   
      if (target.classList.contains('equals')) {
        performCalculation();
        updateDisplay();
        return;
      }
   
      if (target.classList.contains('operator')) {
        handleOperator(target.innerText)
        return;
      }
   
      inputDigit(target.innerText);
      updateDisplay();
    });
  }