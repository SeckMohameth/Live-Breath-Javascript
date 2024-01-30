//reverses the order of the array

const arr = ["apple", "orange", "banna", "cherry"]

arr.reverse();

console.log(arr)


let name = "mom"
let splitName = name.split("")

let mother = splitName.reverse()
mother.join('')

if(name === mother) {
  console.log("is palindrome")
}