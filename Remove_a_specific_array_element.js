function myFunction(a=[], n){
    
    a = a.filter((e) => {
        return e !== n;
    });

    return a;
}


console.log(myFunction([1,2,'2'], '2'));