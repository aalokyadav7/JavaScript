const user = {
    userName : "ABCD",
    price : 100,

    welcomeMessage : function(){
        console.log(`${this.userName},welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.userName = "XYZ"
// user.welcomeMessage()
// console.log(this);

// function one(){
//     let userName = "ABCD"
//     console.log(this.userName);
    
// }
// one()

// Arrow Function
const Demo = () => {
    let userName = "QWERT"
    console.log(this.userName);
    
}
Demo()

