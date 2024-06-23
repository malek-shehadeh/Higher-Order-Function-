// Ex1 :  Write a function that takes an array of integers as input, iterates over the array, and returns a new array.
//  The returned array should contain the result of raising 2 to the power of the original input element.
//  For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
//  Use for and forEach and then map to solve this question to see the difference between the three ways

//solution :
let array = [1, 2, 3];
function power(array) {
  //using map (way 1)
  let x = array.map((element) => Math.pow(2, element));
  return x;

  //using forEach (way 2)
  // let x=[];
  // array.forEach(element => {
  //    x.push(Math.pow(2,element));
  // });
  // return x;

  //using for loop (way 3)
  // let x=[];
  // for (let i = 0; i < array.length; i++) {
  //    x.push(Math.pow(2,array[i]));
  // }
  // return x;

  //using for (way 4)
  // let x=[];
  // for(let element of array){
  // x.push(Math.pow(2,element))
  // }
  // return x;
}

console.log(power(array));

// Ex2:  Write a function that takes an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
// For example:([1,2,3,"Rawan"]) returns ['odd','even','odd','N/A'].

let array2 = [1, 2, 3, "Rawan"];

function oddOrEven(array2) {
  let x = array2.map((element) => {
    if (isNaN(element)) {
      return "N/A";
    } else {
      if (element % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    }
  });
  return x;
}

console.log(oddOrEven(array2));

// Ex3: Use forEach to  Return all the names in the array  [“Rawan", "Wesam", "Hind", "Muhammad", "Esraa", “Dareen”] using loops

let array3 = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
array3.forEach((element) => {
  console.log(element);
});

// EX4: Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several rules:
//   - If a number is divisible by 3, add the word "Fizz" to the output array.
//   - If the number is divisible by 5, add the word "Buzz" to the output array.
//   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//   - Otherwise, add the number to the output array.
// Return the resulting output array

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function fizzBuzz(array4) {
  //     //way 1 using map
  // let output=array4.map((element)=>{
  //     if(element % 3 ===0 && element %5 ===0){return "Fizz Buzz"}
  //     else if(element %3 ===0)
  //         {
  //             return "Fizz"
  //         }
  //         else if(element %5===0)
  //             {
  //                 return "Buzz"
  //             }
  //             else{
  //                 return element;
  //             }
  // })

  // return output;

  //way 2 using forEach
  let output = [];
  array4.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      output.push("Fizz Buzz");
    } else if (element % 3 === 0) {
      output.push("Fizz");
    } else if (element % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(element);
    }
  });
  return output;
}

console.log(fizzBuzz(array4));
