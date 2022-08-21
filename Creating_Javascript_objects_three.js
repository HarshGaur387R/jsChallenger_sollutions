// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function myFunction(a = [], b = []) {
 
    let obj={};
    let i =0;

    a.forEach((e)=>{
        obj[e] = b[i];
        i++;
    });

    return obj;
}



console.log(myFunction([1, 'b'], ['a', 2]));


// myFunction(['a','b','c'],[1,2,3]) : Expected {a:1,b:2,c:3}


// myFunction([1,'b'],['a',2]) : Expected{1:'a',b:2}