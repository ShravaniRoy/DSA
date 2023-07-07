//Find the first pair in a SORTED array where the sum is 0.
//Return an array that includes both values that sum to 0 or undefined if a pair doesn't exist

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right] ;
        if(sum === 0){
            return ([arr[left], arr[right]]);
        }
        else if(sum > 0){
            right-- ;
        }
        else{
            left++;
        }
    }
    return undefined;
}

sumZero([-3, -2, -1, 0, 1, 3]); //[-3, 3]
sumZero([-3, -2, 0, 1, 4, 5]); //undefined