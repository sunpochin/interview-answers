// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// https://codingwithmanny.medium.com/how-to-solve-binary-gap-cda3c3e980b8
function solution(N) {
	// console.log('N >>> 0: ', N >>> 0);
	// let xx = Math.max(
	// 	0,
	// 	...(N >>> 0).toString(2).split('1')
	// 	.map((v) => v.length)
	// 	.slice(1, -1)
	// );
	let yy = Math.max(
		...(N >>> 0)
			.toString(2)
			.split('1')
			.map((v) => v.length)
		// .slice(1, -1)
	);
	console.log('yy: ', yy);
	return yy;

	// write your code in JavaScript (Node.js 8.9.4)\
	if (Number.isInteger(N) && N >= 1 && N <= 2147483647) {
		// Convert to binary
		const Binary = N.toString(2);
		//        console.log('Binary: ', Binary)
	}
	// default if it doesn't meet the requirements
	return xx;
}

let ret = solution(32);
console.log('ret: ', ret);
