
/*
 Points to Remember :-
 
1.  JavaScript has global scope and local scope.
2.  Variables declared and initialized outside any function become global variables.
3.  Variables declared and initialized inside function becomes local variables to that function.
4.  Variables declared without var keyword inside any function becomes global variables automatically.
5.  Global variables can be accessed and modified anywhere in the program.
6.  Local variables cannot be accessed outside the function declaration.
7.  Global variable and local variable can have same name without affecting each other.
8.  JavaScript does not allow block level scope inside { } brackets.
*/



//Global Scope access for anywhere
var number = 10;
function calc() {
  return number;
}

console.log(calc());

// Local Scope

function calc() {
  var number = 10;
  return number;
}

console.log(calc());


