


// Mo Object
const Mo = {
  name: "Mohameth",
  age: 26,
  greet: function() {
    return "Hello"
  },
  description: "Mo is a self taught inventor"
}

//const Kay = new Person()

// console.log(Mo)

// iterate through an object
// not working
for(let i = 0; i < Object.keys(Mo).legnth; i++) {
  console.log(Mo[Object.keys(Mo)[i]])

  if(Object.keys(Mo)[i] === "age") {
    conosle.log("Age is: " + Mo[Object.keys(Mo)[i]])
  }
}