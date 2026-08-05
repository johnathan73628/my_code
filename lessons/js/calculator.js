function calculate (){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = 
    "Sum =" + $(num1 + num2)+ "<br>" +
    "Difference =" + $(num1 - num2)+ "<br>" +
    "Product  =" + $(num1 * num2)+ "<br>" +
    "Quotient ="  + $(num1 / num2);
    document.getElementById("result").innerHTML = result;
}



