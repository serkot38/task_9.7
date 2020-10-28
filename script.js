let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

function updateAction(OperandA, SelectOperation) {
    if (operation === null) {
        lastOperand = parseFloat(OperandA);
        operation = SelectOperation;
        inputWindow.value = "0";
    }
    else {
        operation = SelectOperation;
    }
    showAction(lastOperand, operation)
}

function showAction(lastOperand, operation) {
    document.querySelector('.action').innerText = lastOperand + operation;
}

function updateJournal(operandB, result) {
    document.querySelector(".journal ul").innerHTML += lastOperand + operation + operandB + "=" + result + "<br>";
}

document.querySelector("#btn_journal").addEventListener('click', function () {
    document.querySelector(".journal").classList.toggle('journal-show');
})

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
    showAction("", "");
})

document.querySelector("#btn_sum").addEventListener('click', function () {
    updateAction(inputWindow.value, "+");
})

document.querySelector("#btn_def").addEventListener('click', function () {
    updateAction(inputWindow.value, "-");
})

document.querySelector("#btn_mult").addEventListener('click', function () {
    updateAction(inputWindow.value, "*");
})

document.querySelector("#btn_div").addEventListener('click', function () {
    updateAction(inputWindow.value, "/");
})


document.querySelector('#btn_sqr').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
	const result = Math.pow(lastOperand, 2);
	inputWindow.value = result;
})

document.querySelector('#btn_sqrt').addEventListener('click', function () {
    const v = inputWindow.value;
    if (v < 0) {
        alert('Недопустимый ввод');
    } else {
        inputWindow.value = Math.sqrt(v);
        document.querySelector(".journal ul").innerHTML += "sqrt(" + v + ")=" + inputWindow.value + "<br>";
    }
})

document.querySelector('#btn_neg').addEventListener('click', function () {
	lastOperand = parseFloat(inputWindow.value);
	const result = neg(lastOperand);
	inputWindow.value = result;
	
	function neg(a) {
	return -a;
	}
})

document.querySelector('#btn_calc').addEventListener('click', function () {
    if (operation != null) {
        let val = parseFloat(inputWindow.value);

        if (val == 0 && operation == "/") {
            alert('Недопустимый ввод');
            return false;
        }

        switch (operation) {
            case '+':
                result = lastOperand + val;
                break;
            case '-':
                result = lastOperand - val;
                break;
            case '*':
                result = lastOperand * val;
                break;
            case '/':
                result = lastOperand / val;
                break;
        }

        inputWindow.value = result;
        updateJournal(val, result)
        lastOperand = 0;
        operation = null;
        showAction("", "");
    }
})

document.querySelector('#btn_1').addEventListener('click', function () {
    if (inputWindow.value == '0') {
		inputWindow.value = '1';
	} else {
		inputWindow.value += '1';
	}
})

document.querySelector('#btn_2').addEventListener('click', function () {
    if (inputWindow.value == '0') {
		inputWindow.value = '2';
	} else {
		inputWindow.value += '2';
	}
})

document.querySelector('#btn_3').addEventListener('click', function () {
    if (inputWindow.value == '0') {
		inputWindow.value = '3';
	} else {
		inputWindow.value += '3';
	}
})

document.querySelector('#btn_4').addEventListener('click', function () {
    if (inputWindow.value == '0') {
		inputWindow.value = '4';
	} else {
		inputWindow.value += '4';
	}
})

document.querySelector('#btn_5').addEventListener('click', function () {
    if (inputWindow.value == '0') {
		inputWindow.value = '5';
	} else {
		inputWindow.value += '5';
	}
})

document.querySelector('#btn_6').addEventListener('click', function () {
    if (inputWindow.value == '0') {
		inputWindow.value = '6';
	} else {
		inputWindow.value += '6';
	}
})

document.querySelector('#btn_7').addEventListener('click', function () {
    if (inputWindow.value == '0') {
		inputWindow.value = '7';
	} else {
		inputWindow.value += '7';
	}
})

document.querySelector('#btn_8').addEventListener('click', function () {
    if (inputWindow.value == '0') {
		inputWindow.value = '8';
	} else {
		inputWindow.value += '8';
	}
})

document.querySelector('#btn_9').addEventListener('click', function () {
    if (inputWindow.value == '0') {
		inputWindow.value = '9';
	} else {
		inputWindow.value += '9';
	}
})

document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})

document.querySelector('#btn_fra').addEventListener('click', function () {
    if (inputWindow.value.includes('.') == false) {
        inputWindow.value += ".";
    }
})