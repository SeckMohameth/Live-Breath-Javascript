
let job = "You will get hired. Don't worry about the job not taking you!"

let findMatch = /job/; //exact match
console.log(findMatch.test(job));

let moreMatches = /You|worry|not/ //find more than one math
console.log(moreMatches.test(job));


let myStr = "Holberton is the best place to learn. holberton is cool";
let ignoreCase = /holberton/i; // ignore case

console.log(ignoreCase.test(myStr));

