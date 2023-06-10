let word = "diego"

//length mathod 
let wordLen = word.length;
console.log(wordLen)

console.log(word.toUpperCase())
console.log(word.toLowerCase())

//slice

let take = word.slice(0, 8)
console.log(take)

//reverse a string - Diego's example
// let backwards = []
// for(let i = wordLen ; i > 0 - 1; i--) 

// {
  
//   let letter = word[i];
//   backwards.push(letter)

// }

// console.log(backwards)

// let newLen = backwards.join('');

// console.log(newLen);

let backwards = "revers"
let newStr = ""

for(let i = backwards.length - 1; i >= 0; i--) {
  newStr += backwards[i]
  }

console.log(newStr)



// add a string 
// let index = 0
// let text = ""

// while(index < 10) {
//   console.log(text)
// }
