// method shallow copies part of an array to another location in the same array and returns the modied array without changing its length

let arr = [1, 2, 3, 4, 5, 6, 7 ]

arr.copyWithin(4, 0, 3)

console.log(arr)