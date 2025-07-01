let myName = "max  "

console.log(myName.trueLength)

let myHeros = ["thor","captain_america"]

let heroPower = {
    thor:"hammer",
    captain_america:"shield",

    getThorPower:function(){
        console.log(`thor power is ${this.thor}`)
         }
}

Object.prototype.max =  function(){
    console.log("max is present in all objects")
    
}
Array.prototype.heymax = function(){
    console.log("max says hello")
    
}
// heroPower.max()
// myHeros.max()
// // heroPower.heymax()
// myHeros.heymax()

//Inheritance

const user = {
    name:"chai",
email:"chai@connect.com"
}
const teacher = {
    makeVideo : true
}

const teachingStaff = {
    isAvailable : false
}

const TASupport = {
    makeAssignment:"js",
    fullTime:true,
    _proto_:teachingStaff
}
teacher._proto_=user

console.log(user.name)


//modern syntax

Object.setPrototypeOf(teachingStaff,teacher)

let anotherUserName = "chai aur code  "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
    
    
}

anotherUserName.trueLength()
"chai".trueLength()
"icetea".trueLength()