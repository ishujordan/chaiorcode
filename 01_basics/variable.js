
const account_Id = 1758675 

let account_Email = "mohit@gmail.com"

var account_Password = "12345"

accountCity = "jaipur"

//account_Id = 2// not allowed to change a const variable 

console.log(account_Id)

account_Email = "rohit@gmal.com"
account_Password = "1245"
accountCity = "delhi"

console.log(accountCity)

console.table([account_Id,account_Password,accountCity])  //to print all the variables in a table  together 

/*pefer not to use  var beacuse of issue in block scope and functional scope */

let accountState ;


console.log(accountState)


