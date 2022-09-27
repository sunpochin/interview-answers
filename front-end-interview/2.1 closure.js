// var storyWriter = function () {
// 	var story = '';

// 	var addWords = function (string) {
// 		story = story + string;
// 		return story.trim();
// 	};

// 	var erase = function () {
// 		story = '';
// 	};
// 	return {
// 		addWords: addWords,
// 		erase: erase,
// 	};
// };

// let ret = storyWriter().addWords('444');
// console.log('ret: ', ret)


// function doSome() {
//     var x = 10;
//     function f(y) {
//         return x + y;
//     }
//     return f;
// }
// var foo = doSome();
// console.log(foo(20));  // 30
// console.log(foo(30));  // 40


function doSome() {
	var x = 10;
	function f(y) {
		return y + 10;
	}
	return f;
}
var foo = doSome();
console.log(foo(20));  // 30
console.log(foo(30));  // 40




function doSome() {
    var x = 10;
    function f(y) {
        x = x + y;
        return x;
    }
    return f;
}
var foo = doSome();
console.log(foo(20));  // 30
console.log(foo(30));  // 60
