let num = 0;
let str = "";
let obj = {};
let arr = [];
let boolValue = true;
let nullUndef = null;

// TODO: Implement equality check (==)
function checkEquality() {
    // TODO: Compare num with false using ==
    if (num == false) {
        return "num is falsy (coercion)";
    }
    return "num is not falsy (coercion)";
}

// TODO: Implement strict equality check (===)
function checkStrictEquality() {
    // TODO: Compare num with 0 using ===
    if (num === 0) {
        return "num is strictly equal to 0";
    }
    return "num is not strictly equal to 0";
}

// TODO: Implement inequality check (!=)
function checkInequality() {
    // TODO: Compare str with "" using !=
    if (str != "") {
        return "str is not empty (coercion)";
    }
    return "str is falsy (coercion)";
}

// TODO: Implement strict inequality check (!==)
function checkStrictInequality() {
    // TODO: Compare obj with null using !==
    if (obj !== null) {
        return "obj is not null";
    }
    return "obj is null";
}

// TODO: Implement logical AND (&&) check
function checkLogicalAND() {
    // TODO: Check if arr.length > 0 and obj is truthy
    if (arr.length > 0 && obj) {
        return "Both array and object are truthy";
    }
    return "At least one is falsy";
}

// TODO: Implement logical OR (||) check
function checkLogicalOR() {
    // TODO: Check if either boolTrue or boolFalse is true
    if (boolTrue || boolFalse) {
        return "At least one boolean is true";
    }
    return "Both booleans are false";
}

// TODO: Implement truthy/falsy check for null
function checkNullTruthiness() {
  // TODO: Check if nullUndef is truthy
  if (nullUndef) {
    return "nullUndef is truthy";
  }
  return "nullUndef is falsy";
}

// TODO: Implement truthy/falsy check for undefined with negation
function checkUndefinedTruthiness() {
  // TODO: Check if nullUndef is falsy using negation
  if (!nullUndef) {
    return "nullUndef is falsy (negation)";
  }
  return "nullUndef is truthy";
}

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
