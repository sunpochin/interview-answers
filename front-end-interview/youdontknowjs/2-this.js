function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo,
};

var bar = obj.foo; // function reference/alias!

var a = 'oops, global'; // `a` also property on global object

bar(); // "oops, global"
