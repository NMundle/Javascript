function sayMyName(){
    console.log("Hello World");
    
}
// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
}
 const result = addTwoNumbers(3,5);
//  console.log("Result:",result);
 
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("max"))

function  calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user =  {
 username : "Max",
 price:199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//  handleObject(user);

handleObject({
    username : "sam",
    price:399
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
