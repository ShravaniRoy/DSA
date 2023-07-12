function areThereDuplicates() {
    let freqCounter = {};
    
    for(let val of arguments){
        freqCounter[val] = (freqCounter[val] || 0) + 1;
    }
    
    for(let key in freqCounter){
        if(freqCounter[key] > 1){
            return true;
        } 
    }
    return false;
  }

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 