const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];


const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
// for(let i = 0; i < firstNames.length; i++){
//   for(let l = 0; l < lastNames.length; l++) {
//     for(let p = 0; p < places.length; p++) {
//       bios.push("My name is " + firstNames[i] + " " + lastNames[l]  + " and I amd from " + places[p] )

//       firstNames[i++]
//       lastNames[l++]
//       places[p++]
//     }
//   }
// }


//  YOU ONLY NEED ONE LOOP AND YOU CAN USE THE INDEX TO INCREMENT THROUGH THE OTHER ARRAYS
let index = 0

for(let i = 0; i < firstNames.length; i++) {
  bios.push("My name is " + firstNames[i] + " " + lastNames[i]  + " and I am from " + places[i])

}


console.log(bios)