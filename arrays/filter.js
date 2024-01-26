let arr = [1, 2, 9, 4, 3]

// takes a function as a parameter
console.log(arr.filter((num) => {
  return num > 1
}))


let name = ["chris", "dom", "Mo", "Diego"]

console.log(name.filter((index) => {
   return index === "Mo"
}))
