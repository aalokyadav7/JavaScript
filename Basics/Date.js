// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreateDate =new Date("2023-01-14")
let myCreateDate =new Date("02-08-2024")
// console.log((myCreateDate.toLocaleString()));;

let myTimeStemp = Date.now()
// console.log(myTimeStemp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

`${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday: "long",
})