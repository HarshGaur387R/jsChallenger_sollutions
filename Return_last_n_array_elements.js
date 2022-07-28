function myFunction(a=[],n){

    return a.slice(a.length-n,a.length);
}

console.log(myFunction([1, 2, 3, 4, 5], 2));