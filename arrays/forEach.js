// forEach takes an array and executes a function on each element in the array


const fruits = ['apple', 'banna', 'cherry', 'berry']

fruits.forEach(function(item) {
  console.log(item)
})

const num = [2, 4, 6]

//similar to the map function in a way
num.forEach(function(item) {
  console.log(item * 2)
})



let person = {
  name: "Mohameth",
  age: 26,
  School: "Holberton",
  Job: "Educator"
}


for(let key in person) {
  console.log(`${key}`)
}
