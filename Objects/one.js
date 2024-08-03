/*
singleton 

object literals
*/

// Object.create
const mySym = Symbol("Key1")



const JsUser = {
    name: "Alok",
    "full name": "Alok yadav",
    [mySym]: "myKey1",
    age :23,
    Location:"Indore",
    Email: "xyz@gmail.com",
    isLoggedIn: false,
    LastLoggedIn:["Monday","Tuesday"]
}

// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);


// JsUser.Email = "xyz.uber.com"
// Object.freeze(JsUser)
// JsUser.Email = "abc.mail.com"
// console.log(JsUser);


JsUser.greeting = function()
{
    console.log("Hello JavaScirpt");
    
}
console.log(JsUser.greeting);


JsUser.greetingTwo = function()
{
    console.log(`Hello JavaScirpt,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
