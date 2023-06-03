//creates a new array from an array-like object


// NOT WORKING? 
const obj = {
  0: 'apple',
  1: 'banna',
  2: 'cherry',
  lenth: 3
}

const arr = Array.from(obj)

console.log(arr)