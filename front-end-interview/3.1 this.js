function a() {
	console.log(this);
}
/* In normal function calls */
a(); //  this 就是 window/* Within methods on objects */
var obj = {};
obj.a = a;
obj.a(); // 這時 this 就是 obj/* Within an object that has been constructed */
var b = new a();
// 這時 this 會是 a 這個 function 所產生的 object/* A function invoked with .call, .apply, or bind */
a.call(obj);
// 這時 this 也是 obj
