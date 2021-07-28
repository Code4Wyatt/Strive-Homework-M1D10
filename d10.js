let a = "John "
let b = " Doe"
let join = a + "<>" + b;

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


      function getMaxMin(numbers) {
        let max = numbers[0]
        let min = numbers[0]

        /*for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > max){
                max = numbers[i]
            }
            
            if (numbers[i]< min) {
                min = numbers[i]
            }
        }*/

        for (let number of numbers) {
          max = number > max ? number : max
          min = number < min ? number : min
        }

        return { max, min };
      }

      console.log(getMaxMin(randomNumbers));

     // 28) Create an array of arrays, in which every array has 10 random numbers
    
     let arrayOfArrays = []  // creating first array

     for (let i = 0; i < 10; i++) { // for loop to create 10 inner arrays
       let innerArray = []
       for (let j = 0; j < 10; j++) { // for loop to create 10 random numbers 
         innerArray.push(Math.round(Math.random() * 10))  // using .push to 10 random numbers
       }
       arrayOfArrays.push(innerArray)
     }


     // 29 Create a function that gets 2 arrays and returns the longest one

     function returnLargest(array1, array2) {
       return array1.length >= array2.length ? array1 : array2  // if array1 is more than or equal to array 2 return array 1, if not array 2
     }
     console.log(returnLargest([5,6,7], [4,5]))

    // 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
    
    function returnLargestSum(array1, array2) {

      let sum1 = 0

      for (let number of array1) {
        sum1 += number
      }

      let sum2 = 0

      for (let number of array2) {
        sum2 += number
      }

      return sum1 >= sum2 ? sum1 : sum2
    }

    console.log(returnLargestSum([100, 999], [100, 22]))