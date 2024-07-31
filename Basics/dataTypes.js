/* 
primitive => call by value
 7 types : string, number, boolean, null, undifined, symbol, bigInt.

 JavaScript is 

 */

 const score = 100
 const scorevalue = 100

 const IsloggedIn = false
 const OutsideTemp = null
 let userEmail;

 const id = Symbol('4544')
 const anotherId = Symbol('4544')

 console.log(id === anotherId);

 const bigNumber = 123445665544334n


 /*Refrrence type/non primitive

 types: Arrey, Objects, Functions.*/


 const heros = ["shaktiman", "juniorG"]
 let myObj={
    name:"Alok",
    age: 22,
 }

 const myFun=function(){
console.log("Hello World...!");
 }

//  know datatype
// console.log(typeof bigNumber);
console.log(typeof myFun);