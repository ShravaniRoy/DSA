// currying a function that can take 2 arguments
// let us sum the arguments

function add(a, b){
    return a+b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
function subtract(a, b){
    return a-b;
}
function curriedEval(operator){
    return function (a){
        return function (b){
            if(operator === 'add') return add(a,b)
                else if(operator === 'subtract') return subtract(a,b)
                    else if(operator === 'multiply') return multiply(a,b)
                        else if(operator === 'divide') return divide(a,b)
                    else return "invalid operator"
        }
    }
}

// console.log(curriedAdd(2)(4));
// const reusableAdd = curriedAdd(4);
// console.log(reusableAdd(4));
// console.log(reusableAdd(5));
// console.log(reusableAdd(6));
const evaluateAdd = curriedEval('add');
console.log(evaluateAdd(2)(3));
console.log(evaluateAdd(5)(2));
console.log(evaluateAdd(6)(9));
const evaluateMul = curriedEval('multiply');
console.log(evaluateMul(2)(3));
console.log(evaluateMul(5)(2));
console.log(evaluateMul(6)(9));