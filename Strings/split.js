let char = "ABABAAB"

let arr = char.split("")

console.log(arr)


//  FROM HACKERRANK
// ========================
// function numberOfDeletions(char) {
//   let arr = char.split("")
//   let deletions = 0

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === arr[i + 1]) {
//       deletions++
//     } 
//   }

//   return deletions
// }

// numberOfDeletions()