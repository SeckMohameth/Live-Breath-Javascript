// testing out typeof()

let num = 26
let str = "string"
let name = "Mo"

console.log(typeof(num))

// === already checks to see if they are the same type though 🤔
if (str === typeof(name)) {

  console.log("this is a string")
}

// console logs false with == and ===
if (str === name) {
  console.log("true") 
} else {
  console.log("fales")
}

// this returns true though
if (str === typeof(name)) {
  console.log("true") 
} else {
  console.log("fales")
}