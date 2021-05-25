function myFirst() {
    console.log("Hello");
};

function mySecond(){
    console.log("Goodbye");

    myFirst();
};

// fucntions are executed in the sequence they are called
// Not the sequence they are defined 

//myFirst();
//mySecond();


mySecond();

// NOT good examples in this file, but more in asynchronous functions later