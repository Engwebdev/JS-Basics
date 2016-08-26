//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(param) {
  if (param === name) {
    return true;
  }
  return false;
}  //Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
  var name = prompt("What is your first name?");
  return name;
}  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  alert("Welcome, " + getName());
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?
//
// Paramaters are the function specific variables used to name the values that will be passed to them, Arguments are the actual values passed into functions.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//0, '', false, NaN, Null, Undefined.  if (*arguement* == 0)?



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here

function myName( ) {
  return "Shea"
}

//Now save the function definition of myName into a new variable called newMyName

var myNewName = myName;  //Code Here

//Now alert the result of invoking newMyName

alert(myNewName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return function() {
    return "Shea";
  };
}  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();  //Code Here

//Now invoke innerFn.
innerFn();
