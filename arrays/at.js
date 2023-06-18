//returns the element at the specified index in the array.

// take one argument. The index

const num = [1, 2, 3, 4, 5, 6]

const index = num.at(-1)

console.log(index)


// function endsWithX(string) {
//     let arr = []
//     for(let i = 0; i < string.length; i++) {
//         arr.push(string[i])
//     }
//   console.log(arr)
   
//     if(arr.at(-1) === 'X' || arr.at(-1) === 'x') {
//         return true
//     } else {
//       return false
//     }
    
// }


function endsWithX(string) {

    return string[string.length - 1].toLowerCase() == "x" ? true : false;
}

endsWithX("Pizzax")


let name = "Kay"

console.log(name.at(-1))