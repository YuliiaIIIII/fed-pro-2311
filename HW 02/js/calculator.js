let firstNumber = parseFloat(prompt('Type the first number', 0));
let operationNumber = prompt('Operation');
let secondNumber = parseFloat(prompt('Type the second number', 0));

let result = 0;
if(operationNumber == '+'){
    result = firstNumber + secondNumber;
    console.log('Plus value:', result);
}
else if(operationNumber == '-'){
    result = firstNumber - secondNumber;
    console.log('Minus value:', result);
}
else if(operationNumber == '*'){
    result = firstNumber * secondNumber;
    console.log('Multiply value:', result);
}
else if(operationNumber == '/'){
    result = firstNumber / secondNumber;
    console.log('Divide value:', result);
    if(secondNumber == 0){
        alert('Even dont try to do that!')
    }
}
else if(operationNumber == '>'){
    result = firstNumber > secondNumber;
        if(firstNumber>secondNumber){
        console.log('The first number is bigger than the second number');
        }
        else if(firstNumber==secondNumber){
            console.log('The first number is equal to the second number');
        }
        else{
        console.log('The first number is less than the second number');
        }
}
else if(operationNumber == '<'){
    result = firstNumber < secondNumber;
        if(firstNumber<secondNumber){
        console.log('The first number is less than the second number');
        }
        else if(firstNumber==secondNumber){
            console.log('The first number is equal to the second number');
        }
        else{
        console.log('The first number is bigger than the second number');
        }
}
else{
    console.log('Operation not found');
}