const user = {
    username:"Max",
    price:999,

    welcomeMessage: function () {
        console.log(`${this.username} welcome to website`);
        //this refers current context
        // console.log(this);
     }

}
// user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Max"
//     console.log(this.username);
//     }
//     chai()

    // const chai = function(){
    //     let username = "Max"
    //     console.log(this.username);
        

    // }
    // console.log(chai);
    const chai = ()=>{
        let username = "Max"
        console.log(this)
        
    }
    // chai()

    // const addTwo = (num1,num2)=>{
    //     return num1+num2

    // }
    // const addTwo = (num1,num2)=> num1+num2
    const addTwo = (num1, num2) => ({username: "hitesh"})

// console.log(addTwo(5,3));

