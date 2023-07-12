function averagePair(sortedArr, targetAvg){
    
    let left = 0;
    let next = 1;
    
    let tempAvg = 0;
    
    while(next<sortedArr.length){ //solution for consecutive pairs
        if((sortedArr[left] + sortedArr[next]) / 2 === targetAvg){
            return true;
        } else {
            left = left + 1;
            next = next + 1;
        }
    }
    return false;
  }
// averagePair([-1,0,3,4,5,6], 4.1); //false
// averagePair([],4) //false
// averagePair([1,2,3],2.5) //true