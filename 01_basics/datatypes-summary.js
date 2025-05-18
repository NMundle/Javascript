//DataTypes
//primitive and non-primitive datatypes

//primitive datatype
//7 types:string,number,boolean,BigInteger,null,undefined,symbol

const score = 100
const scoreValue = 100.3
const isLoggedIn = false;
const outSideTemp = null
let userEmail;//undefined

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId)

const BigInteger = 1362413548513475n





//Reference(Non Primitive)

//Array,Objects,Functions


let heros = ["iron-man","superman","batman"]

let myObj =  {
    name:"nutan",
    age:19,
}

let myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof heros);
