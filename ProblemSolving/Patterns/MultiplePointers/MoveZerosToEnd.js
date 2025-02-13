//function to move all zeros to the end of the array
function moveTheZerosToEnd(A){

    let count = 0;
    const len = A.length;
    for ( i =0; i< A.length; i++ ){
        if(A[i] !== 0){
            A[count] = A[i];
            count = count+1;
        }
        
    }
    while(count < A.length){
        A[count] = 0;
        count = count+1;
    }
    return A;
}
moveTheZerosToEnd([1,2,3,4,0,5,0,6,0,9]);