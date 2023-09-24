/*  
Input:
S = i.like.this.program.very.much
Output: much.very.program.this.like.i
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
        console.log(newString);
    } else {
        return splitString.toString();
    }
}
reverseString('i.like.this.program.very.much');