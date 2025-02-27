// a function that can infinite args

function curriedAdd(a){
    return function (b){
        if (b) return curriedAdd(a+b);
        return a;
    }
}

console.log(curriedAdd(2)(3)(5)(6)())