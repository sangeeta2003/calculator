const operator = prompt("eneter operator to perform the calculation(either *,-,+,/)");
const number1 = parseFloat(prompt("eneter the first number"));
const number2 = parseFloat(prompt("eneter the second number"));
let result;
if(operator == '+'){
    result = number1+number2;
}
else if(operator == '-'){
    result = number1 - number2;
    
}
else if(operator == '*'){
    result == number1 * number2;
}
// else if(operator == '='){
//     result =`${number1} ${operator}${number2} = ${result}`;
// }
// else if(operator == "🆑"){
//     display.innerText = ""
// }
else {
result = number1 % number2;
}
window.result("result is "=""  +result);

// console.log(`${number1} ${operator}${number2} = ${result}`);



