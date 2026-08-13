function getNumbers(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    return [num1, num2];
}

function add(){
    let [num1, num2] = getNumbers();
    let answer = num1 + num2;
    document.getElementById("result").innerHTML = "Sum =" + answer;
}

function subtract(){
    let [num1, num2] = getNumbers();
    let answer = num1 - num2;
    document.getElementById("result").innerHTML = "Difference =" + answer;
}
function multiply(){
    let [num1, num2] = getNumbers();
    let answer = num1 * num2;
    document.getElementById("result").innerHTML = "Product =" + answer;
}

function divide(){
    let [num1, num2] = getNumbers();
    let answer = num1 / num2;
    document.getElementById("result").innerHTML = "Quotient =" + answer;
}

function clearFields(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "Result: 0";
}



