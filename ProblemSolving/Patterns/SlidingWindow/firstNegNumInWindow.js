function slidingWindow(arr, k){
    if (arr.length<=0 || arr.length<k) return null; //when no arr

    for(let i=0; i<k; i++){
        if(arr[i] < 0){
            console.log(arr[i]);
            //recursive function to print for next window
            arr.shift();
            return slidingWindow(arr, k);
        }
    }
}
slidingWindow([2, 6, -9, 2, -1, 8, 5, -6, 3], 3)