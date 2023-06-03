// this method returns the iterator that provides the values for each index in the array.

// takes no arguments

const arr = ["apples", "oranges", "cherry", "grape"]

const iterator = arr.values();

for (const value of iterator) {
  console.log(value)
}