//Array is variable where we can store multiple values
// In arrays we can store any data type values like, strings, numbers, boolean, objects, functions and other arrays.

//syntax
// var array_name = [] ===> Empty array
//               0        1       2       3
var fruits = ['mango','banana','apple','orange'];
// access each element by its index 
// arryname = [index0 , index1, index2, index3]
// always the last index is ---- length-1
console.log(fruits);
console.log(fruits[0]); 
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); 

console.log(fruits[4-1]);
console.log(fruits[3-1]);

// length of an array = length
/*The length property returns the length of an array, which is the total number of elements contained in the array.*/

const l = fruits.length
console.log(fruits.length);

// to get the last element ===> l-1
console.log(fruits[l-1]);

//iterations or repetation

for(var index = 0; index < fruits.length; index++){
    
    console.log(fruits[index]);
    
} 

// To add a new element at the end of an array, use the push() method.

fruits.push('grapes');
console.log(fruits); // push adds at the end of an array

fruits.push('orange'); // push adds at the end of an array
console.log(fruits);

// To add a new element at the beginning of an array, use the unshift() method.

fruits.unshift('guava'); 
console.log(fruits);  // unshift adds at the beginning of an array

fruits.unshift('papaya');
console.log(fruits);


// To remove the last element from an array, use the pop() method.

fruits.pop();
console.log(fruits); // pop removes end of an array

fruits.pop();
console.log(fruits); 

// To remove the first element from an array, use the shift() method.

fruits.shift(); // shift removes begining of an array element
console.log(fruits); 

fruits.shift();
console.log(fruits);

//extracting a portion of an array with  slice()  method. The original array will not be modified. And it takes two parameters

// syntax
//  array.slice(startIndex, endIndex)

var result = fruits.slice(0, 3);  //prints index0 to index3 elements only
console.log(result);



console.log(fruits); // prints all elements , it means slice method do not modified its original array

// Adding or removing elements at any position by using splice() method , and the original array will be modified. And it takes three parameters.

//syntax
// array.splice(startIndex, deleteCount, 'element1',...'elementN')

 var res = fruits.splice(1, 2, 'strawberry' , 'coconut');

console.log(res); 
console.log(fruits);


// Merging two or more arrays , use concat();  method , its doesn't change the existing arrays, instead it returns a new array 

var color1 = ['red', 'blue','green'];

var color2 = ['white', 'white','orange'];

var colors = color1.concat(color2);

console.log(colors);


