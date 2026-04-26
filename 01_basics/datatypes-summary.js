//primitive

// 7 types : string ,Number ,Boolean , null , undefined , symbol , Bigint 

const score = 100
const scoreValue =  100.3

const isLoggedIn = false 
const outsideTemp =  null

let useEmail;


const id = Symbol('123')

const anotherid =Symbol('123')

 /***Ye ek primitive data type hai (string, number ki tarah)
 Use hota hai unique identifier banane ke liye
 Mostly objects ke andar unique keys banane ke kaam aata hai***/

 /***  Kab use kare?
Jab tum object mein safe unique property banana chahta ho
Jab tum nahi chahta ki koi aur us key ko accidentally overwrite kare
 ***/

console.log(id === anotherid);

 const bigNumber = 123456234555512343521n  ///  use n at the  end to convert  these  numbers into bigint datatype



 //refrence (Non-primitive)
 //Array,   object , function //

 const towns  = ["palampur","yol","sujanpur"]

 let obj = {
    name : "mohit",
    sex  : "male",
    rollno: "23",
 }


 let  myFunction = function(a, b ){
     
      return  (a + b)

 }


    console.log(myFunction(2,3))


    