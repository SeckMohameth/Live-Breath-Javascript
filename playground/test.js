// required and optional arguments

function greetUser(user = "Siri"){ // 
   console.log("Hello " + user)
}

greetUser()



function greetUser(user){
   console.log("Hello " + user)
}
greetUser() // this will give you undefined. It requires a paremter