// find sub arrays of size k that have equal sum 

function subArraySumFreq(arr, k){
    let subArrSumFreq = {};
    let tempsum =  0;
    //compute the first k elements sum
    for(let i=0; i<k; i++){
        tempsum += arr[i];
    }
    subArrSumFreq[tempsum] = 1;
    //sliding window for next sum frequencies
    for(let i=k; i<arr.length; i++){
        tempsum = tempsum - arr[i - k] + arr[i];

        subArrSumFreq[tempsum] = (subArrSumFreq[tempsum] || 0) + 1;
    }
    
    return subArrSumFreq;
}

console.log(subArraySumFreq([1, 2, 3, 4, 5, 6], 3));
