// Values to compare
const num = 0;      // Falsy (number 0)
const str = "";      // Falsy (empty string)
const obj = {};      // Truthy (empty object)
const arr = [];      // Truthy (empty array)
const boolTrue = true; // Truthy (boolean true)
const boolFalse = false; // Falsy (boolean false)
const nullValue = null;  // Falsy (null)
const undefinedValue = undefined; // Falsy (undefined)

// Equality (==)
if (num == false) {
    console.log("num is falsy (coercion)"); // This gets logged
}

// Strict Equality (===)
if (num === 0) {
    console.log("num is strictly equal to 0"); // This gets logged
}

// Inequality (!=)
if (str != "") {
    console.log("str is not empty (coercion)");
} else {
    console.log("str is falsy (coercion)"); // This gets logged
}

// Strict Inequality (!==)
if (obj !== null) {
    console.log("obj is not null"); // This gets logged
}

// Logical AND (&&) 
if (arr.length > 0 && obj) {
    console.log("Both array and object are truthy");
} else {
    console.log("At least one is falsy"); // This gets logged
}

// Logical OR (||)
if (boolTrue || boolFalse) {
    console.log("At least one boolean is true"); // This gets logged
}

// Combining with Truthy/Falsy Checks
if (nullValue) {
    console.log("nullValue is truthy"); 
} else {
    console.log("nullValue is falsy"); // This gets logged
}

if (!undefinedValue) {
    console.log("undefinedValue is falsy (negation)"); // This gets logged
}