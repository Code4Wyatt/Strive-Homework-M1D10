let john = "John "
let doe = " Doe"
let join = john + "\<\>" + doe;

console.log(join);

const obj = {
name: "Paul", 
surname: "Murray", 
email: "pm161118@outlook.com",
};

delete obj.email;

console.log(obj);

// 24) Create an array with 10 strings in it

let stringArray = [] // created an empty array

for (let i = 0; i < 10; i++) {  // used for loop to give 10 values from 0 to 10
    stringArray.push("This is new string number:" + i); // pushed string and concatenated with i to give 10 strings
}

console.log(stringArray);

// 26) Create an array with 100 random numbers in it

let numArray = [];  // Created new empty array

for (let i = 0; i < 100; i++) {  // Used for loop to call numbers 0 to 100
    numArray.push(Math.round(Math.random() * 100)); // Pushed loop i to empty array with random numbers from 0 to 100
}

console.log(numArray);

// 27) Wrote a function to get the MAX and the MIN from the previously created array

let randomNumbers = [];
      for (let i = 0; i < 100; i++) {
        randomNumbers.push(Math.round(Math.random() * 100));
      }

      console.log(randomNumbers);

      function getMaxMin(numbers) {
        let max = numbers[0];
        let min = numbers[0];

        /*for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > max){
                max = numbers[i]
            }
            
            if (numbers[i]< min) {
                min = numbers[i]
            }
        }*/

        for (let number of numbers) {
          max = number > max ? number : max;
          min = number < min ? number : min;
        }

        return { max, min };
      }

      console.log(getMaxMin(randomNumbers));

// Create an array of arrays, in which every array has 10 random numbers

let array = [[], [], []]; 