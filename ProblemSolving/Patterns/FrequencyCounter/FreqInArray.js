//Problem: check if arr2 has squares of numbers from arr1 with same frequency
//example inputs are hasSquares([1, 2, 4], [16, 1, 4]), hasSquares([1, 2, 1], [4, 1, 1])
function hasSquares(arr1, arr2){
    //As O(n) is better than O(n**2)
    if(arr1.length !== arr2.length){
        return false
    }
    let freqCounter1 = {};
    let freqCounter2 = {};

    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }
    for(let key in freqCounter1){
        if(!(key**2 in freqCounter2)){ //if the square doesn't exist in arr2
            return false;
        }
        if(freqCounter1[key] !== freqCounter2[key**2]){
            return false
        }
    }
    return true;

}

hasSquares([1, 2, 4], [16, 1, 4]); //true
hasSquares([1, 2, 4], [16, 4]); //false
hasSquares([1, 2, 1], [4, 1, 1]); //true
hasSquares([1, 2, 1], [4, 1, 4]); //false