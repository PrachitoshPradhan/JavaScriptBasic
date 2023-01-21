// // SCOPE --> 

// // function scope - Variable having Function-scope means variable will only be available to use inside the function it declared, will not be accessible outside of function, and will give Reference Error if we try to access.

// // example: 
// // function name() {
// //     var myAge = 22;
// //     console.log(myAge); 
// // }

// // name() //output => 22(

// // console.log(myAge); //output => ReferenceError

// // Block Scope - Block means a pair of curly brackets, a block can be anything that contains an opening and closing curly bracket.
// //               Variable having Block-scope will only be available to use inside the block it declared, will not be accessible outside the block, and will give Reference Error if we try to access.

            
// //               if(true) {
// //                 let myName = "your name";
// //                 console.log(myName); //output=> "your name"
// //             }
// //             console.log(myName); //output => ReferenceError   
            
// //             In the example above, we have an if block with a true condition, and inside the if block, we declare a variable name myName. Now when we try to print the myName variable to the console, it prints successfully, but when we try to print the variable outside the if block, we get a Reference Error.


// VAR :

// -> its a way to declare variable. if using  var its declared within a function ,
//    then it has function scope else if its declared outside , it has a global scope.

// -> The var keyword is used to declare function-scoped variables and globally-scoped variables. 
//    If you use var inside a block, the variable will not be a block scoped.
//    It will either be function scoped or globally scoped depending upon where the block is present.

// -> Problem with the var Variable --- > var variable can be re-declared and updated. 
//    re-declaration allows declaring more than one variable with the same name, because of this reason, 
//    if we declare a new variable by mistake, it will override the original variable value.

// Hoisting Var - When we declare a var variable, it gets hoisted to the top of the scope 
//                and gets assigned the value of undefined.



// LET :

// -> Let variable introduce a special feature that does not allow re-declaration of variables.
//    re-declaration was a problem in var variable but let variable solve this problem.

// -> The let variable has block scope, meaning let variable will be accessible only inside the block it's declared. 
//    if we try of access outside of the scope, it will show a Reference Error.

// -> let variable didn't allow re-declaration of the variable, but it allowed us to update the variable.
//    re-declaration of the variable was a big problem with var variable let variable helped us to avoid the 
//    problem created by re-declaration of the variable.

//    let myName = "my name";
//    myName = "my new name"; //updating
//    console.log(myName); //output => "my new name"

// Hoisting LeT - let variable also get hoisted to the top of the scope 
//                But does not get assigned any value, as a result, 
//                if we try to access the let variable before declaration it will throw a syntax error 
//                because it doesn't have any value to print.



// CONST :

// -> here re-declaration or updation is not allowed unlike var and let.
// -> Const variable also has the Block scope like let variable, 
//    const variable also can't be accessed outside of the scope. 

// Hoisting Const - The const variable also gets hoisted to the top of the scope 
//                  But does not get initialize any value, as a result, if we try to access the
//                  const variable before the declaration, it will throw a syntax error because 
//                  it doesn’t have any value to print, and it is illegal for the const variable.