// gets the value of any number button that is clicked
const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
		console.log(event.target.value)
	})
})

// changes the value input of text area input screen when a number is clicked.
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number)=> {
	calculatorScreen.value = number
}

// runs the updateScreen functions
numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
		updateScreen(event.target.value)
	})
})

// declaring variables for calculation
let prevInput ='0'
let calculationOperation = ''
let currentInput ='0'

//inputNumber function
const inputNumber = (number)=>{
	if(currentInput==='0'){ // fixing the display problem of zero at the start of number
		currentInput = number
	} else{
		currentInput+=number
	}
}

numbers.forEach((number)=>{
	number.addEventListener(("click"),(event)=>{
		inputNumber(event.target.value)
		updateScreen(currentInput)
	})
})

//clear screen
const empty = document.querySelector('.all_clear')

empty.addEventListener('click',()=>{
	updateScreen('0')
	currentInput='0'
})	
// gets the value of any operator that is clicked
const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
		inputOperator(event.target.value)
	})
})

//inputOperator function 

const inputOperator = (operator)=>{
	prevInput = currentInput
	calculationOperator = operator
	currentInput = '0'
}

// percentage	
const pOperator = (operator)=>{
	prevInput=currentInput
	calculationOperator = operator

}
const per = document.querySelectorAll(".per_operator")

per.forEach((per_operator)=>{
	per_operator.addEventListener("click",(event)=>{
	pOperator(event.target.value)
	updateScreen(prevInput)
	})
})


// run calculate function on the press of equal button

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',()=>{
	calculate()
	updateScreen(currentInput)
})	

// calculate function
const calculate =()=>{
	let result = 0 
	switch(calculationOperator){
		case '+':
		result = parseInt(prevInput) +parseInt(currentInput)
		break
		
		case '-':
		result =  parseInt(prevInput) - parseInt(currentInput)
		break 
		
		case '*':
		result =parseInt( prevInput) * parseInt(currentInput)
		break
		
		case '/':
		result = parseInt(prevInput)/parseInt(currentInput)
		break
		
		case '%':
		result = parseInt(prevInput)/100
		break

		case '.':
		result = parseInt(prevInput)+'.'+parseInt(currentInput)
		default:
		return
	}
	// result should be shown to the screen so type is changed to string as caculatorscreen type is text.
	currentInput = result.toString()
	calculationOperator =''
}

