

/* The number of operations depends on the number of inputs
so this is linear time
*/
let num = [1, 2, 3, 4, 5]


const loop = () => {
  num.forEach(element => console.log(num[element]))
}

loop()