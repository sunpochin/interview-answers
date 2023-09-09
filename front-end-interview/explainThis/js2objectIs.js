console.log("1 == \"1\": ", 1 == "1"); // true
console.log("0 == false: ", 0 == false); // true
console.log(undefined == null); // true

console.log("======="); // true

console.log(Object.is(1, 1)); // true
console.log(Object.is(1, "1")); // false
