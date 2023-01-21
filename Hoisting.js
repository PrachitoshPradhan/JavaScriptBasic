/*
Hoisting is mainly using the variable or function even before declaring it.
when we try to access any variable or function even before
declaring them, then instead of error we get UNDEFINED for varibale and 
the whole function in case we try to access function.

LET and CONST varibales are also hoisted but without any default insitialisation,
but in case of VAR the varibale is hoisted with default initialisation of undefined.
*/

sum();
//sum1();
console.log(test);
console.log(test1);
console.log(sum);  

var test = "xyz";
var test1 ;

function sum(){
    console.log("Added.");
}

var sum1 = () => {
    console.log("Added to.")
}

