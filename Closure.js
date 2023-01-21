/*
A closure is the combination of a function bundled together (enclosed) with references to 
its surrounding state (the lexical environment). In other words, a closure gives you access 
to an outer function's scope from an inner function.

function after they are rturned from another function , they still retain their lexical scope.
*/

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
//console.log(z);

z();

