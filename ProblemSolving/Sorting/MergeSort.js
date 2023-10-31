/* merging two sorted arrays */
function mergeSortedArrays(arr1, arr2){
    let i = 0
    let j= 0;
    let result = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    /* for remaining elements in arrays. Possible when lengths are not same */
    while(i < arr1.length){
        result.push(arr1[i]);
            i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
            j++;
    }
   return result;
}

function breakArray (arr){
    let mid = Math.floor(arr.length / 2);
    if(arr.length < 2){ //base case where we cannot proceed to break array
        return arr;
    }
    let left = breakArray(arr.slice(0, mid));
    let right = breakArray(arr.slice(mid, arr.length))
    return mergeSortedArrays(left, right);
// recursively calling the breakArray n merging array by passing left sub array and right sub array
}

breakArray([12, 32, 0, 4, 9, 43, 20, 5, 45, 2]);

