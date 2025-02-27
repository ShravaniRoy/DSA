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

console.log(curriedAdd(2)(4));