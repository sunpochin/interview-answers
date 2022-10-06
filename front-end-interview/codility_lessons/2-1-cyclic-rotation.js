// https://app.codility.com/demo/results/trainingQ3UJTE-RAT/
function solution(A, K) {
	// write your code in JavaScript (Node.js 8.9.4)
	if (A.length == 0) {
		return A;
	}

	let result = A;
	for (let i = 0; i < K; i++) {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
		let popped = result.pop();
		let newarr = [];
		newarr.push(popped);
		// console.log('newarr: ', newarr);
		result = newarr.concat(result);
		// console.log('concat: ', result);
	}
	return result;
}

let arr = [6, 3, 7, 2];
let ret = solution(arr, 3);
// console.log('ret: ', ret);
arr = [];
ret = solution(arr, 3);
console.log('ret: ', ret);
