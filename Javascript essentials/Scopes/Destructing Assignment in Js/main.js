/*
Destructuring Assignment is a JavaScript expression that allows to unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables. In Destructuring Assignment on the left-hand side defined that which value should be unpacked from the sourced variable.

In general way implementation of the extraction of the array is as shown below:

Example:
*/

<script>
var names = ["alpha", "beta", "gamma", "delta"];
  
var firstName = names[0];
var secondName = names[1];
  
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
</script>



/*
Syntax:

Array destructuring:
var x, y;
[x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20
or



[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(x); // 10
console.log(y); // 20
console.log(restof); // [30, 40, 50]
Object destructuring:
({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20
or

({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}
Array destructuring: Using the Destructuring Assignment in JavaScript array possible situations, all the examples are listed below:


Example 1: When using destructuring assignment the same extraction can be done using below implementations.

<script>
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
      
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
  
//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
          
console.log(firstName);//"alpha"
console.log(secondName);//"beta
</script>
*/

/*
Example 2: The array elements can be skipped as well using a comma separator. A single comma can be used to skip a single array element. One key difference between the spread operator and array destructuring is that the spread operator unpacks all array elements into a comma-separated list which does not allow us to pick or choose which elements we want to assign to variables. To skip the whole array it can be done using the number of commas as there is a number of array elements.

<script>
var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
          
console.log(firstName);//"alpha"
console.log(thirdName);//"gamma"
</script>
*/
/*
Example 3: In order to assign some array elements to variable and rest of the array elements to only a single variable can be achieved by using rest operator (…) as in below implementation. But one limitation of rest operator is that it works correctly only with the last elements implying a subarray cannot be obtained leaving the last element in the array.

<script>
var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
          
console.log(firstName);//"alpha"
console.log(lastName);//"gamma, delta"
</script>
*/
/*
Example 4: Values can also be swapped using destructuring assignment as below:

<script>
var names = ["alpha", "beta", "gamma", "delta"];
  
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
  
//After swapping
[firstName, secondName] = [secondName, firstName]
      
console.log(firstName);//"beta"
console.log(secondName);//"alpha"
</script>

*/

/*
Example 5: Data can also be extracted from an array returned from a function. One advantage of using a destructuring assignment is that there is no need to manipulate an entire object in a function but just the fields that are required can be copied inside the function.

<script>
function NamesList() {
        return ["alpha", "beta", "gamma", "delta"]
    }
var[firstName, secondName] = NamesList();
  
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
</script>
*/
/*
Example 6: In ES5 to assign variables from objects its implementation is

<script>
var marks = {x: 21, y: -34, z: 47 };
  
var x = marks.x; // x = 21
var y = marks.y; // y = -34
var z = marks.z; // z = 47
  
console.log(x);
console.log(y);
console.log(z);
</script>
*/
/*

Example 7: The above implementation in ES6 using destructuring assignment is.

<script> 
var marks = {x: 21, y: -34, z: 47 }; 
  
const { x, y, z } = marks; // x = 21, y = -34, z = 47 
  
  
console.log(x); 
console.log(y); 
console.log(z); 
</script>

Object destructuring:

Example: The Nested objects can also be destructured using destructuring syntax.

<script>
const marks = {
  section1: { alpha: 15, beta: 16},
  section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1); // 15, 16
  
</script>


                

                        

                            

                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                

                        

                    
<script> 
var marks = {x: 21, y: -34, z: 47 }; 
  
const { x, y, z } = marks; // x = 21, y = -34, z = 47 
  
  
console.log(x); 
console.log(y); 
console.log(z); 
</script> 

                    

                
Output:

21
-34
47
Object destructuring:

Example: The Nested objects can also be destructured using destructuring syntax.

<script>
const marks = {
  section1: { alpha: 15, beta: 16},
  section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1); // 15, 16
  
</script>
Output: