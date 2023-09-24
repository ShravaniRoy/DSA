/*  
Input:
S = i.like.this.program.very.much
Output: i.ekil.siht.margorp.yrev.hcum
*/
function reverseString (S){
    let splitString = S.split('.');
    if(splitString.length > 1){
        let start = 0;
        let end = splitString.length - 1;
        while(start < end){
            let temp = splitString[start];
            splitString[start] = splitString[end];
            splitString[end] = temp;
            start = start + 1;
            end = end - 1;
        }
        let newString = splitString.join('.');
        return newString;
    } else {
        return splitString.toString();
    }
}
function reverseEachWordInString (S){
    let splitString = S.split('.');
    if(splitString.length > 0){
        let idx = 0;
        let reversed = [];
        while(idx < splitString.length){
            const result = reverseString(splitString[idx]);
            reversed.push(result);
        }
        reversed.join('.');
        console.log(reversed);
    } 
}
reverseEachWordInString('i.like.this.program.very.much');