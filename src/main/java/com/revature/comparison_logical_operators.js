// Values to compare
const num = 0;
const str = "";
const obj = {};
const arr = [];
const boolTrue = true;
const boolFalse = false;
const nullValue = null;
const undefinedValue = undefined;

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
    // TODO: Check if nullValue is truthy
    if (nullValue) {
        return "nullValue is truthy";
    }
    return "nullValue is falsy";
}

// TODO: Implement truthy/falsy check for undefined with negation
function checkUndefinedTruthiness() {
    // TODO: Check if undefinedValue is falsy using negation
    if (!undefinedValue) {
        return "undefinedValue is falsy (negation)";
    }
    return "undefinedValue is truthy";
}
