// https://shubo.io/javascript-hoisting/#%E7%94%A8-iife-immediately-invoked-function-expressions-%E6%A8%A1%E6%93%AC%E5%8D%80%E5%A1%8A%E4%BD%9C%E7%94%A8%E5%9F%9F-block-level-scope

// for (var i = 0; i < 3; ++i) {
// 	setTimeout(() => {
// 		console.log(i); // 3, 3, 3
// 	}, i * 1000);
// }
// 這樣寫是錯的，會每個一秒印出一個3。因為根據 hoisting 的原則，i 會是一個 global 變數。上面的程式碼等同於：

// var i;
// for (i = 0; i < 3; ++i) {
// 	setTimeout(() => {
// 		console.log(i); // 3, 3, 3
// 	}, i * 1000);
// }

// for (var i = 0; i < 3; ++i) {
// 	(function (j) {
// 		setTimeout(() => {
// 			console.log(j); // 0, 1, 2
// 		}, j * 1000);
// 	})(i);
// }
