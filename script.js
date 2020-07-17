const container = document.querySelector(".container");
const keys = container.querySelector(".calculator_keys");
const operators = keys.querySelectorAll (".operator");
const screen = document.getElementById("screen");
let lastNumber=0;
let currentNumber = 0;
let operatorPressed = false;
let action = "";
screen.value = 0;


keys.addEventListener ('click', function (event) {
	for (i=0; i<operators.length ; i++) {
	operators[i].style.background = "";
	}
	/*when a number button is pressed*/
	if (event.target.classList.contains('numbers')) {
		if (screen.value === '0' ||  
			operatorPressed === true ) {
			screen.value = event.target.textContent;
			operatorPressed = false;
		} else {
			screen.value = screen.value+event.target.textContent
		}
		if (event.target.textContent === "%") {
			screen.value = parseFloat(screen.value)/100;
		}
	}
	/*when an operator button is pressed*/
	if (event.target.classList.contains('operator')){
		if (action === "") {
			lastNumber = parseFloat(screen.value);
		} else {
			currentNumber=parseFloat(screen.value);
			lastNumber = calculate(lastNumber,action,currentNumber);		
		}
		action = event.target.textContent;
		event.target.style.background = "#96E3A9";
		operatorPressed = true;
		screen.value = lastNumber;

		if (event.target.textContent === "=") {
			event.target.style.background="";
			screen.value = lastNumber;
			operatorPressed = true;
			action="";
		}
	}
	/*when ac is pressed*/
	if (event.target.textContent==='AC') {
		screen.value = 0;
		currentNumber = 0;
		action = "";
	}
});
//the calculation function
const calculate = (a,action,b) => {
	if (action === "-") {
		 return (a-b);
	} else if (action === "+") {
		return a+b;
	} else if (action === "x") {
		return a*b;
	} else if (action === ":") {
		return a/b;
	} else if (action === "x^y") {
		return Math.pow(a,b);
	}
}
