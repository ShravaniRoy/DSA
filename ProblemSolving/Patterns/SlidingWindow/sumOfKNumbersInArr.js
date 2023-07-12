function slidingWindow(arr, k){
    let maxsum = 0;
    let tempsum = 0; //to hold the sum of first k numbers

    //edge case
    if(k > arr.length) return null;

    for(let i=0; i<k; i++){
        tempsum += arr[i];
    }
    maxsum = tempsum; //initially first tempsum is maxsum

    for(let i=k; i<arr.length; i++){
        tempsum = tempsum - arr[i-k] + arr[i];
        maxsum = Math.max(maxsum, tempsum);
    }

    return maxsum;
}

slidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); //19