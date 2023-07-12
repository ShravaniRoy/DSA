function sameFrequency(num1, num2){
    let freqCounter = {};
    
    if(num1.toString().length !== num2.toString().length) return false;
    
    for(let val of num1.toString().split('')){
        freqCounter[val] = (freqCounter[val] || 0) + 1;
    }
    
    for(let val of num2.toString().split('') ){
        if(!(val in freqCounter)){
            return false;
        } else {
            freqCounter[val] = freqCounter[val] - 1;
        }
    }
    return true;
  }

  sameFrequency(34,14) //false
  sameFrequency(314,143) //true