// https://app.codility.com/demo/results/trainingSAQAJW-B4R/
//  O(N**2) 
// https://app.codility.com/demo/results/training33FT6C-Z42/ 
//  O(N) or O(N*log(N)) 

function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
  const mySet = new Set();
  for (let i = 0; i < A.length; i++) {
    
    if (mySet.has(A[i]) ) {
      mySet.delete(A[i]);
    } else {
      mySet.add(A[i]);
    }
  }
  // console.log('result: ', result);
  const iterator1 = mySet.values();
  let answer = iterator1.next().value;
  return answer;
}

let A = [9, 3, 9, 3, 9, 7, 9];
let ret = solution(A);
console.log('ret: ', ret)
