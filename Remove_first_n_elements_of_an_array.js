function myFunction(a = []){
    return a.slice(3,a.length);
}

console.log(myFunction([5,4,3,2,1,0]));