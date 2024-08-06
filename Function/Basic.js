

// function Name(){
//     console.log("A");
//     console.log("B");
//     console.log("C");
//     console.log("D");
//     console.log("E");
//     console.log("F");
// }

// Name()

// function addTwoNumbers( number1, number2){
// console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let Result = number1 + number2
    return number1 + number2
}
const Result = addTwoNumbers(3, 9)


console.log("Result:", Result);


function loginUserMessage(userName){
    if(userName === undefined){
        console.log("enter value");
        return
        
    }
    return `${userName} logged in `
}
console.log(loginUserMessage("Success"))