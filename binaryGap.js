// Find longest sequence of zeros in binary representation of an integer

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binaryNum = Number(N).toString(2);

    binaryNum = binaryNum.replace(/^0+|0+$/g, "");
    
    let zeroArray = binaryNum.split("1");
    let gap = 0;
    
    zeroArray.forEach(element =>{
       if(gap < element.length){
         gap = element.length;
       }
    });
    
    return gap;
}