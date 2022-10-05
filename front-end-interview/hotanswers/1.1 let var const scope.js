// function printG() {
// 	g = 1;
// 	console.log(`printG: `, g);
// }
// printG(); // => printG: 1
// console.log(`Global G:`, g); // => Global G: 1

// https://totoroliu.medium.com/javascript-var-let-const-%E5%B7%AE%E7%95%B0-e3d930521230
let tmp = 'js';
function f() {
	var tmp = 'world';
	if (true) {
	}
}
f();
function g() {
	var tmp = 'world';
	if (true) {
	}
}
console.log(tmp);

var s = 'hello';
for (var i = 0; i < s.length; i++) {
	console.log(s[i]);
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
	console.log('test1:', test1);
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

// https://medium.com/starbugs/%E9%9D%A2%E8%A9%A6-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%83%E7%9A%84-js-%E8%A7%80%E5%BF%B5%E9%A1%8C-%E4%B8%AD%E8%8B%B1%E5%B0%8D%E7%85%A7%E4%B9%8B%E4%B8%8A%E7%AF%87-3b0a3feda14f
console.log('\n\nhannah: ');

var a = 4;
function foo(x) {
	var b = a * 4;

	function bar(y) {
		var c = y * b;
		return c;
	}

	return bar(b)
}
console.log('foo(a): ', foo(4))
// console.log('c: ', c);

