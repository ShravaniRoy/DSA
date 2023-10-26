/* merging two sorted arrays */
function mergeSortedArrays(arr1, arr2){
    let i = j = 0;
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
}

function breakArray (arr){
    let start = 0;
    let end = arr.length - 1;
    let mid = arr.length / 2;
    if(arr.length < 2){ //base case where we cannot proceed to break array
        return arr;
    }
    return mergeSortedArrays(breakArray(arr.slice(start, mid)), breakArray(arr.slice(mid+1, end)));
//recursively calling the merging array by passing left sub array and right sub array
}

breakArray([12, 32, 0, 4, 9, 43, 20, 5, 45, 2]);

