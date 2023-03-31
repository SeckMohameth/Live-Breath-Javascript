
function Hello() {
  console.log("hello")
}
Hello()

//arrow functions
const greeting = () => {
  console.log("Hello")
}
greeting()



//<button onClick={() => { console.log("hello")} }> </button>

//Ternary Operators 

//long way
if (true) {
  
} else {
  
}

// short way
let age = 19;
// let name = "Peter";

//let name = age > 10 ? "Mo" : "Peter"

//console.log(name)


//OBJECTS 
//const name ="Mo"
//const age = 26

 const person = {
   name: "Mo",
   age: 26,
   isEmployed: true,
 }

// const name = person.name
// const age = person.age
// const isEmployed = person.isEmployed

//destructuring
// const { name, age, isMarried } = person


// const person2 = { ...person, name: "Jack"}

// console.log(person)



let people = ["Chris", "Dom", "Diego", "Kay", "Kay", "Kay"]

//.map()
//.filter()

people.map((name) => {
  return ""
})

people.filter(() => {
  return people !== "Kay"
})


