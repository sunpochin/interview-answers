
// function printG() {
// 	g = 1;
// 	console.log(`printG: `, g);
// }
// printG(); // => printG: 1
// console.log(`Global G:`, g); // => Global G: 1

// https://totoroliu.medium.com/javascript-var-let-const-%E5%B7%AE%E7%95%B0-e3d930521230
// let tmp = 'js';
// function f() {
// 	var tmp = 'world';
// 	if (true) {
// 	}
// }
// f();
function g() 
{
	var tmp = 'world';
	if (true) {
	}
}
console.log(tmp);

var s ="hello"
for (var i = 0 ; i < s.length; i++) {
	console.log(s[i])
}
console.log('i: ', i);


function printName() {
	myName = 'John 1';
	console.log(myName);
	if (false) {
		var myName;
	}
}
printName(); // John

{
	var myName = 'John 2';
}
console.log(myName); // John

function test() {
	var test1 = 1;
	console.log("test1:", test1)
}


// 块级作用域只对 let 和 const 声明有效，对 var 声明无效。


{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined

{
  var x = 1;
}
console.log(x); // 1

// console.log('test:', test);

