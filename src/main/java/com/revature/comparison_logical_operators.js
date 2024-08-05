let num = 0;
let str = "";
let obj = {};
let arr = [];
let boolValue = true;
let nullUndef = null;



/* Implement equality check (==)
   TODO: Write an if statement that compares num with false using == 
   If true, return "num is falsy (coercion)"
   Otherwise, return "num is not falsy (coercion)"
*/
function checkEquality() {
  
  
}

/* Implement strict equality check (===)
   TODO: Write an if statement that compares num with 0 using ===
   If true, return "num is strictly equal to 0"
   Otherwise, return "num is not strictly equal to 0"
*/
function checkStrictEquality() {
  
}

/* Implement inequality check (!=)
   TODO: Write an if statement that compares str with "" using !=
   If true, return "str is not empty (coercion)"
   Otherwise, return "str is falsy (coercion)"
*/
function checkInequality() {
 
}

/* Implement strict inequality check (!==)
   TODO: Write an if statement that compares obj with null using !==
   If true, return "obj is not null"
   Otherwise, return "obj is null"
*/
function checkStrictInequality() {
 
}

/* Implement logical AND (&&) check
   TODO: Write an if statement that checks if arr.length > 0 AND obj is truthy
   If true, return "Both array and object are truthy"
   Otherwise, return "At least one is falsy"
*/
function checkLogicalAND() {
  
}

/* Implement logical OR (||) check
   TODO: Write an if statement that checks if boolValue is true OR !boolValue is true
   If true, return "At least one boolean is true"
   Otherwise, return "Both booleans are false"
*/
function checkLogicalOR() {
 
}

/* Implement truthy/falsy check for null
   TODO: Write an if statement that checks if nullUndef is truthy
   If true, return "nullUndef is truthy"
   Otherwise, return "nullUndef is falsy"
*/
function checkNullTruthiness() {
  
}

/* Implement truthy/falsy check for undefined with negation
   TODO: Write an if statement that checks if !nullUndef is true (i.e., nullUndef is falsy)
   If true, return "nullUndef is falsy (negation)"
   Otherwise, return "nullUndef is truthy"
*/
function checkUndefinedTruthiness() {
 
}




              /* DO NOT TOUCH THE BELOW CODE */


document.getElementById('equalityForm').addEventListener('submit', function(event) {
  event.preventDefault();

  num = parseFloat(document.getElementById('number').value);
  str = document.getElementById('string').value;
  obj = document.getElementById('object').value === 'empty' ? {} : {key: 'value'};
  arr = document.getElementById('array').value === 'empty' ? [] : [1];
  boolValue = document.getElementById('boolean').value === 'true';
  nullUndef = document.getElementById('nullUndefined').value === 'null' ? null : undefined;

  const results = [
    `num == false: ${num == false}`,
    `num === 0: ${num === 0}`,
    `str != "": ${str != ""}`,
    `obj !== null: ${obj !== null}`,
    `arr.length > 0 && obj: ${arr.length > 0 && obj}`,
    `bool || !bool: ${boolValue || !boolValue}`,
    `!!num: ${!!num}`,
    `!!str: ${!!str}`,
    `!!obj: ${!!obj}`,
    `!!arr: ${!!arr}`,
    `!!bool: ${!!boolValue}`,
    `!!nullUndef: ${!!nullUndef}`,
    `Equality check: ${checkEquality()}`,
    `Strict equality check: ${checkStrictEquality()}`,
    `Inequality check: ${checkInequality()}`,
    `Strict inequality check: ${checkStrictInequality()}`,
    `Logical AND check: ${checkLogicalAND()}`,
    `Logical OR check: ${checkLogicalOR()}`,
    `Null truthiness check: ${checkNullTruthiness()}`,
    `Undefined truthiness check: ${checkUndefinedTruthiness()}`
  ];

  document.getElementById('results').innerHTML = results.join('<br>');
});
