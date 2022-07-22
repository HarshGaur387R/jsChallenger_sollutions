// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function myFucntion(a,b){
    
    if(a == b && typeof(a) == typeof(b)){
        return true;
    }
    return false;
}


console.log(myFucntion("fakse","fakse"));