/*
By definition, a callback is a function that you pass into another function as an argument for executing later.
*/

///EXAMPLE 1

function isOdd(number) {
    return number % 2 != 0;
  }
  function isEven(number) {
    return number % 2 == 0;
  }
  
  function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
      if (fn(number)) {
        results.push(number);
      }
    }
    return results;
  }
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  console.log(filter(numbers, isOdd));      //isOdd is callback fucntion
  console.log(filter(numbers, isEven));     //isEven is callback fucntion


  ////EXAMPLE2 -----> Passing anonymous function as argument

  function filter(numbers, callback) {
    let results = [];
    for (const number of numbers) {
      if (callback(number)) {
        results.push(number);
      }
    }
    return results;
  }
  
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  let oddNumbers = filter(numbers, function (number) {       //passing anonymous function as callback to filter 
    return number % 2 != 0;
  });
  
  console.log(oddNumbers);

