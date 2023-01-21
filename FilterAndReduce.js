let arrayNumber = [80, 20, 30, 70, 50,40,90,10];
function Total(addition, num) {
    return addition + num;
}

/*
   The filter() function creates a new array populated with all the elements 
   that passed the condition of the callback function.
*/
let numbers = arrayNumber.filter((Element) => (Element > 30));
console.log(numbers);

let numbers1 = arrayNumber.filter((Element) => {return Element > 30});
console.log(numbers1);


/*
  The reduce() method executes a callback function on every element in the array, 
  which results in a single value.
*/
let sum = arrayNumber.reduce((accumulator, currValue)=>{return accumulator + currValue},0);
console.log(sum);
