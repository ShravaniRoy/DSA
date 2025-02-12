function findMaxCharFreqCount(str){
    let freqCountObj = {};
    let maxCountChar = 1;
    var res = '';
    str.split("").forEach(element => {
        if(freqCountObj.hasOwnProperty(element)){
            freqCountObj[element] = freqCountObj[element] + 1;
        } else {
            freqCountObj[element] = 1;
        }
        if(freqCountObj[element] > maxCountChar){
            maxCountChar = freqCountObj[element];
            res = element;
        }
    });
    return res;
}

findMaxCharFreqCount("helloworld");

//function that returns the first character that has max freq count in the string