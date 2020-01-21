// Rotate an array to the right by a given number of steps.

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)

	if(A.length > 0){
		  for (let i=0; i<K; i++){
			A.unshift(A.pop());
		}
	}
	
   return A;
}