// var bar = function () {
// 	console.log(this.a);
// };

// var foo = function () {
// 	var a = 123;
// 	this.bar();
// };

// var people2 = {
// 	gender: 'male',
// 	bar: bar,
// 	a: 123,
// };

// foo();
// people2.bar();

// var foo = 'foo';
// var obj = {
//   foo: 'foo in Object'
// };

// var sayFoo = function() {
//   console.log( this.foo );
// };

// obj.sayFoo = sayFoo;

// obj.sayFoo();   // ?
// sayFoo();       // ?

// var obj = {
//   func1: function(){
//     console.log( this === obj );
//     var func2 = function(){
//       // 這裡的 this 跟上層不同！
//       console.log( this === obj );
//     };
//     func2();
//   }
// };
// obj.func1();

// var obj = {
// 	func1: function () {
// 		'use strict';
// 		console.log(this === obj);
// 		var func2 = function () {
// 			// 宣告成嚴格模式後，這裡的 this 會變成 undefined。
// 			console.log(this);
// 		};
// 		func2();
// 	},
// };
// obj.func1();

// var el = document.getElementById('btn');

// el.addEventListener(
// 	'click',
// 	function (event) {
// 		console.log(this.textContent);
// 	},
// 	false
// );

// ajax function
var $ajax = function (url, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			var data = JSON.parse(request.responseText);
			if (typeof callback === 'function') {
				callback.call(null, data);
			}
		}
	};

	request.send();
};

// button & click event.
var el = document.getElementById('btn');

// 按下按鈕後執行 ajax，但在 callback function 的 this 卻不是你想像中的那樣
el.addEventListener(
	'click',
	function (event) {
		// 透過 that 參考
		var that = this;
		console.log(this.textContent);

		$ajax('index.html', function (res) {
			// this.textContent => undefined
			console.log(that.textContent, res);
		});
	},
	false
);

// el.addEventListener("click", function(event) {
//   // 透過 that 參考
//   var that = this;
//   console.log( this.textContent );

//   $ajax('[URL]', function(res) {
//     // this.textContent => undefined
//     console.log(that.textContent, res);
//   });

// }, false);

lala = [1, 2, 3, 4, 5]
const ret = lala.reduce((acc, curItem) => {
  return acc + curItem;
}, 0);

lala.reduce((acc, curItem) => {
  
})

console.log('ret: ', ret);