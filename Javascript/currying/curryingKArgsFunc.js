// currying a function that can take 2 arguments
// let us sum the arguments

function add(a, b){
    return a+b;
}
function curriedAdd(a){
    return function (b){
        return add(a,b);
    }
}

// console.log(curriedAdd(2)(4));
const reusableAdd = curriedAdd(4);
console.log(reusableAdd(4));
console.log(reusableAdd(5));
console.log(reusableAdd(6));