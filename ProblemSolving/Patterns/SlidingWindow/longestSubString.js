//Given a string s, find the length of the longest substring without repeating characters.

function findLongestSubString(inputString){
    //we have to find the k here
    var window = inputString.substring(0, 1);
    let lengthOfLongestSubString = 0;
    for(let i = 1; i<inputString.length; i++){
        let nextCharInString = inputString.charAt(i);
        if(window.indexOf(nextCharInString) === -1){
            window = window.concat('', nextCharInString);
        } else {
            lengthOfLongestSubString = Math.max(window.length, lengthOfLongestSubString);
            window = nextCharInString;
        }
    }
    return lengthOfLongestSubString;
}

const maxSubString = findLongestSubString("abjnafhriferi");
console.log(maxSubString);