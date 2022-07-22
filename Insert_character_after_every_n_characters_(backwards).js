// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a = "", b) {

    a = a.split("").reverse();
    let s = [''];

    for (let i = 0; i < a.length; i++) {
        if (i > 0 && i % 3 == 0) {
            s += b;
        }
        s += a[i];

    }
    return s.split("").reverse().join("");
}

console.log(myFunction('zxyzxyzxyzxyzxyz', 'w'));