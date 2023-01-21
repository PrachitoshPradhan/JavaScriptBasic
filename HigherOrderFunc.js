/*
 Higher-order functions are functions that make use of functions as either their argument or
their return value. Using functions in both roles is unnecessary; 
if a function works with either of the two, it becomes a higher-order function.
*/
const radius = [2,5,8,4,10];

const diameter = function(radius){
    return 2 * radius;
}

const area = function(radius){
    return 2.14*radius*radius;
}

const circumference = function(radius){
    return 2 * radius * 2.14;
}

const calculate = function (radius ,logic){
    const results = [];
    for (let i =0; i<radius.length; i++){
       results.push(logic(radius[i]));
    }
    return results;
}

console.log(calculate(radius,diameter));
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));