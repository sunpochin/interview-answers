// function foo() {
// 	'use strict';
// 	console.log(this.a);
// }

// var a = 2;

// (function () {

// 	foo(); // 2
// })();


function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"
