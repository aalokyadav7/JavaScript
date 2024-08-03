
// Singleton Object

// const tinderUser = new Object()

// Non-Singleton Object

// const tinderUser = {}

const tinderUser  = {

}
tinderUser.id = "asdfg12"
tinderUser.name = "MSD"
tinderUser.isLoggedIn = false

// console.log((tinderUser));

const regularUser = {
    email:"asvcf@gmail.com",
    fullname:{
        Userfullname:{
            firstname:"Alok",
            lastname : "Yadav"
        }
    }
}
// console.log(regularUser.fullname.Userfullname.firstname);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "c", 4: "d"}
const obj4 = {5 : "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id : 1,
        email : "abc@gmail.com",
    },
    {
        id : 2,
        email : "abc@gmail.com",
    },
    {
        id : 3,
        email : "abc@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));


