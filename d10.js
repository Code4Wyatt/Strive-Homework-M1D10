let john = "John "
let doe = " Doe"
let join = john + "\<\>" + doe;

console.log(join);

const obj = {
name: "Paul", 
surname: "Murray", 
email: "pm161118@outlook.com",
};

delete obj.email

console.log(obj);

// need to revisit and find out why its not logging in the console

const arrayTen = ["This", "Is", "An", "Array", "and", "in", "it", "is", "10", "Strings"];

console.log(arrayTen);

// also not logging in the console for some reason

let numArray = function random(array) {
    for  (let a=[], i=0<100;++i) a[i]=i;
    let tmp, current, top = array.length;
    if (top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current]
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}
console.log(numArray);

// not logging in console


}

// Wrote a function to get the MAX and the MIN from the previously created array

const minMax = function () {
    console.log(Math.max(...numArray));
    console.log(Math.min(...numArray));
}

