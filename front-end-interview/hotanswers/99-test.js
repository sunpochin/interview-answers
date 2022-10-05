
function outer() {
  let counter = 1
  function inner() {
    return counter++;
  }
  return inner;
}
let result = outer();

console.log(result);
console.log(result);


console.log(result);
console.log(result());
console.log(result());
console.log(result());
console.log(result());
