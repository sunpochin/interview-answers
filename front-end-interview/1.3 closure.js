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


// function doSome() {
// 	var x = 10;
// 	function f(y) {
// 		return y + 10;
// 	}
// 	return f;
// }
// var foo = doSome();
// console.log(foo(20));  // 30
// console.log(foo(30));  // 40

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


// https://ithelp.ithome.com.tw/articles/10193009
// 範圍鏈 Scope Chain
// 在開始談閉包之前，我們現來談談「範圍鏈」(Scope Chain) 的觀念。
// 過去幾回我們不斷地強調一個重點「切分變數有效範圍的最小單位是 "function" 」
// 也就是說，像下面這段程式碼：
console.log('\n\nkuro 1: ');

function outer1() {
	// 在 outer 這層拿不到變數 c
	// 但可以向外找到變數 a
	var b = a * 2;

	function inner(c) {
		// 由於範圍鍊的關係，雖然只有對 c 定義，
		// 但可以像上一層一層取得 a, b, c
		console.log(a, b, c);
	}
	inner(b * 3);
}
// 在 global 這層只有 a, 不認得 b 與 c
var a = 1;
outer1(a);


console.log('\nkuro 2: ');
var msg = "global."

function outer2() {
  var msg = "local."
  function inner() {
    return msg;
  }
  return inner;
}
let innerFunc2= outer2();
var result = innerFunc2();
console.log( result );  //


//
console.log('\nkuro 3: ');

function counter() {
  let count = 0;
  function innerCounter(){
    return ++count;
  }
  return innerCounter;
}
var countFunc1 = counter();
console.log(countFunc1());   // 1
console.log(countFunc1());   // 2
console.log(countFunc1());   // 3

// 進一步簡化之後，還可以寫成這樣：
function counter(){
  var count = 0;
	return () => ++count;
}
var countFunc2 = counter();
console.log(countFunc2() );   // 1
console.log(countFunc2() );   // 2
console.log(countFunc2() );   // 3


// // IIFE
// console.log('IIFE: ')
// for (var i = 0; i < 5; i++) {
// 	(function (i) {
// 		setTimeout(function () {
// 			console.log(i);
// 		}, 1000 * i);
// 	})(i);
// }
