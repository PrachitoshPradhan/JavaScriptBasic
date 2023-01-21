// //1st
let fruits = ["Apple", "Banana", "Mango", "Litchi"];
// //console.log(fruits);

// //2nd 
// let colours = new Array();
colours = ["White", "Black", "Green", "Pink"];
// console.log(colours.slice(1,3));

// **3rd through constructor
// let name = new Array("Prachitosh", "Vrisha", "Sourav", "Shree");
// //console.log(name);

// ** for element of last indeX and secnd last index
// let last = colours[colours.length - 1];
// console.log(last);

// //----------------------------------------FOREACH ARRAY ITERATION --------------------------------------------------->>>>>>

// colours.forEach(
//     (name , index) => 
//         console.log(name,index)    
// )

// //----------------------------------------ARRAY METHODS IN JS---------------------------------------------->>>>>>

//  let colourSTring = colours.toString();   /* coverting array to string with comma separated array values */
//  console.log(colourSTring);


// let colourSTring = colours.join("*");     /* coverting array to string adding a separator  */
// console.log(colourSTring);


// fruits1.push("JackFruit", "Pineapple");    /* to add element to the end */
// //console.log(fruits1);


//  fruits.pop();                       /* to remove elemnt from last */
//  console.log(fruits);


// let arrayconcat = fruits.concat(name);   /* The concat() method creates a new array by merging existing arrays */
// //console.log(arrayconcat);


// let name1 = name.concat("Sumi", "Mama");   /* can be used to add elements to array */
// //console.log(name1);                


//let fruits1 = [...fruits]           /* spread operator used to make a copy of array */
// //console.log(fruits1);
// let result = [...fruits,...colours];    /* spread operator used to merge existing array */
// console.log(result);



// fruits1.splice(2, 0, "Grapes", "tomato"); /* 2= at what index , 0= how many elements to remove, then we can add or not add depending on UC. */
// //console.log(fruits1);


//  console.log(colours.slice(1,3));
//  let text = "Hello Prachitosh";     /* The method selects elements from the start argument, and up to (but not including) the end argument. */
//  let afterSlice = text.slice(2,8);
//  console.log(afterSlice);


// let text = "Hello Prachitosh"; 
// let afterSlice = text.split(" ");   /* use to convert strings to arrays. we need to specify the separator to be the rference */
// console.log(afterSlice);

// fruits1.shift();                  /* remove elements from starting */
// //console.log(fruits1);


// fruits1.unshift("Apples");          /* adds elements at starting */
// //console.log(fruits1);


