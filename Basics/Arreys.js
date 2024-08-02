// Array

 const myArr = [0, 1, 3, 5, 6, 8, 7];


 const myArr2 = new Array(1, 3, 5, 6, )


// console.log(myArr[2]);

 /*
 Arrey Method

 myArr.push(6)
 myArr.push(7)
  remove last value
 myArr.pop() 
*/
// Add one more value in 0 th index
// myArr.unshift(0)
// console.log(myArr);

// remove value o th index
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));



// const newArr = myArr.join()

// console.log(myArr);
// console.log( typeof newArr);

// slice, splice

console.log("A", myArr);   

// Returns a copy of a section of an array
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B",myArr);

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const myn2 = myArr.splice(1, 3)
console.log("C",myArr);
console.log(myn2);
