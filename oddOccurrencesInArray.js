// Find value that occurs in odd number of elements.

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
	let object = {};

	for(let i=0; i< A.length; i++){ 
	  object[A[i]] = (object[A[i]] || 0) + 1;	  
	}

	let unpaired;
	for (let key in object){
	  if(object[key] == 1 || object[key]%2 != 0){
	   unpaired = parseInt(key); 
	  }
	}

	return unpaired;
}