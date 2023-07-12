//Count the unique values in a given SORTED array

function countUniqueValues(testArr){
    if(testArr.length === 0){
        return 0;
    }
    if(testArr.length === 1){
        return 1;
    }
    let left=0, next=1;
    while(next <= testArr.length){
        if(testArr[left] === testArr[next]){
            next = next + 1;
        } else {
            testArr[left + 1] = testArr[next];
            next = next + 1;
             left = left + 1;
        }
    }
    return left+1;
}

countUniqueValues([1, 1, 1, 1, 2]);