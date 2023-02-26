const School = {
    type: 'object',
    name: "Holberton",
    numStudents: 123,

    greet: sayHi = () => {
        console.log("Hello World");
    }
};

// console.log(School);
console.log(School.name);
console.log(("I attend " + School.name));


console.log(`The school has ${School.numStudents} students`);

School.greet();