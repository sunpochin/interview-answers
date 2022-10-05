let object1 = {
  message: 'Hello World!',

  logMessage() {
    // console.log('this1: ', this);
    console.log(this.message)
  }
}
let wrapper = function () {
	object1.logMessage();
};
wrapper();

// console.log('funssssc: ', func)
// setTimeout(function() {
//   object1.logMessage()
// }, 1000);

// =======
// https://forum.freecodecamp.org/t/settimeout-object-method/501236/5
// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md
console.log('');
let object2 = {
	message: 'Hello World!',

	logMessage() {
    // console.log('this2: ', this);
		console.log(this.message);
	},
};

let logM = object2.logMessage;
logM(); // undefined

// console.log('object2.logMessage: ', object2.logMessage);
// setTimeout(object2.logMessage, 1000);
// =====
console.log('');
let object3 = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell() {
    return `Goodbye, ${this.who}!`;
  }
}
console.log(object3.greet() );
console.log(object3.farewell());

// =====
console.log('');
var length = 4;
function callback() {
  console.log(this.length);
}
const object4 = {
  length: 5,
  method(callback) {
    callback()
  },
}
object4.method(callback, 1, 2);


// =====
// https://blog.csdn.net/weixin_33727510/article/details/92197744
// https://www.zhihu.com/question/21466212

console.log('');
var length = 4;
function callback() {
  console.log('this: ', this);
  console.log('this.length: ', this.length);
}
const object5 = {
  length: 5,
  method() {
    // console.log('arguments: ', arguments, ', arguments[0]: ', arguments[0]);
    arguments[0]()
  },
}
object5.method(callback, 1, 2, 3);
