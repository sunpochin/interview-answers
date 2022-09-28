function func1(x) {
	console.log('x: ', x);
}
// 用 func1 當作參數傳入函式 func2
function func2(var1, callback) {
	callback(var1);
}
func2(2, func1);
console.log('\n2');
var p = (num) =>
	new Promise((resolve, reject) => {
		if (num <= 2) {
			setTimeout(resolve('Success!'), Math.random() * 1000);
			return;
		}
		reject('Failure!');
	});

p(3)
	.then((res) => {
		console.log(res);
	})
	.catch((error) => {
		console.log(error);
	});
// "Success!"

// https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/

// const makeBurger = () => {
// 	getBeef(function (beef) {
// 		cookBeef(beef, function (cookedBeef) {
// 			getBuns(function (buns) {
// 				// Put patty in bun
// 			});
// 		});
// 	});

// https://www.geeksforgeeks.org/how-to-avoid-callback-hell-in-node-js/

// The callback function for function
// is executed after two seconds with
// the result of addition
const add = function (a, b, callback) {
	callback(a + b);
	//   setTimeout(() => {
	//     callback(a + b);
	//   }, 100);
};

// Using nested callbacks to calculate
// the sum of first four natural numbers.
add(1, 2, (sum1) => {
	add(3, sum1, (sum2) => {
		add(4, sum2, (sum3) => {
			console.log(`Sum of first 4 natural 
      numbers using callback is ${sum3}`);
		});
	});
});

// This function returns a promise
// that will later be consumed to get
// the result of addition
const addPromise = function (a, b) {
	return new Promise((resolve, reject) => {
		// resolve(a + b);
		setTimeout(() => {
			resolve(a + b);
		}, 20);
	});
};

// Consuming promises with the chaining of then()
// method and calculating the result
addPromise(1, 2)
	.then((sum1) => {
		return addPromise(3, sum1);
	})
	.then((sum2) => {
		return addPromise(4, sum2);
	})
	.then((sum3) => {
		console.log(
			`Sum of first 4 natural numbers using 
       promise and then() is ${sum3}`
		);
	});

// Calculation the result of addition by
// consuming the promise using async/await
(async () => {
	const sum1 = await addPromise(1, 2);
	const sum2 = await addPromise(3, sum1);
	const sum3 = await addPromise(4, sum2);

	console.log(
		`Sum of first 4 natural numbers using 
     promise and async/await is ${sum3}`
	);
})();


// https://www.cythilya.tw/2018/10/30/callback/
doA = function (callback) {
	console.log('doA');
	setTimeout(() => {
		callback();
	}, 20);
};
doB = function () {
	console.log('doB');
};
doC = function (callback) {
	console.log('doC');
	setTimeout(() => {
		callback();
	}, 20);
};
doD = function () {
	console.log('doD');
};
doE = function () {
	console.log('doE');
};
doF = function () {
	console.log('doF');
};

doA(function () {
	doB();
	doC(function () {
		doD();
	});
	doE();
});
doF();



getMoreData = (input, callback) => {
    let ret = callback(input)
    return input + ret
}
let a = 5;
getMoreData(3, function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) { 
            getMoreData(c, function(d) { 
	            getMoreData(d, function(e) { 
                    console.log('d:', d, ', e: ', e)
                    return e
		        });
	        });
        });
    });
});