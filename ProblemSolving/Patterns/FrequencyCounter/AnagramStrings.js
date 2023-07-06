//Problem: check if str2 has all chars of str1 with same frequency
//example inputs are isSame('aam', 'maa'), isSame('google', 'legogo')
function isSame(str1, str2){
    //As O(n) is better than O(n**2)
    if(str1.length !== str2.length){
        return false
    }
    let freqCounter1 = {};

    for(let val of str1.split('')){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }
    console.log("freq counter ", freqCounter1);

    for(let val of str2.split('')){
        if(!(val in freqCounter1)){
            return false;
        } else {
            freqCounter1[val] -= 1;
        }
        // console.log("freq counter in loop", freqCounter1);
    }
    return true;
}

isSame('aam', 'maa'); // true
isSame('google', 'gogle'); //false
isSame('aam', 'maam'); //false
isSame('google', 'legogo'); //true
isSame('', ''); //true
