function sayHi(a) {
	var a = 'Mark';
	function fu() {
		var a = 'Casper';
	}
	fu();

	a = 'HexSchool';
}

var a = 'Mary';
sayHi(a);
console.log(a);

function doA() {}
function doB() {}
function doC() {}
function doD() {}
function doE() {}
function doF() {}
doA(function () {
	doB();
	doC(function () {
		doD();
	});
	doE();
});
doF();

// function outer() {
//   let count = 0;
//   function inner() {
//     return count++;
//   }
//   return inner;
// }
// let inst = outer();
// console.log('inst: ', inst);
// console.log('inst: ', inst());
// console.log('inst: ', inst());
// console.log('inst: ', inst());

outer = () => {
	let count = 0;
	inner = () => {
		return count++;
	};
	return inner;
};
let inst = outer();
console.log('ints: ', inst());
console.log('ints: ', inst());
console.log('ints: ', inst());
console.log('ints: ', inst());

// function add(num1, num2, callback) {
// 	return callback(num1, num2);
// }
// let result = add(1, 2, function (num1, num2) {
// 	return add(3, function (num1, num2) {
// 		return num1 + num2;
// 	});
// });
// console.log('result: ', result);

function add(num1, num2, callback) {
	return callback(num1 + num2);
}

add(1, 1, function (sum1) {
	add(1, sum1, function (sum2) {
		add(1, sum2, function (sum3) {
			add(1, sum3, function (sum3) {
				add(1, sum3, function (sum3) {
					add(1, sum3, function (sum3) {
						console.log('result: ', sum3);
					});
				});
			});
		});
	});
});

add(1, 1, function (sum1)).then


