//O(n)

// grows linear and sclaes 1 to 1
// it grows as n grows

const data = ['A', 'B', 'C'];

for(let i = 0; i < data.length; i++){
    console.log(data[i]);
}
//=======================

const data2 = [1, 2, 3, 4, 5];

for(let j = 0; j < data2.length; j++){
    console.log(data2[j]);
}

for(let i = 0; i < data.length; i++){
    console.log(data[i]);
}

// O(n + a)


// nested loop is O(n^2) because each time it loops the inside runs
// very poor performance 