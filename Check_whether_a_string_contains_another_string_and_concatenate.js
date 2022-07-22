// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction(a = "", b = "") {
    let result = "";
    if (a.includes(b)) {
        result = b;
        result += a;
    }
    else {
        result = a;
        result += b;
    }

    return result;
}


console.log(myFunction("pie","l"));