// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f)
{
let total = a+b;
total -= c;
total *= d;
total /= e;
total = Math.pow(total,f);
return total;
}

console.log(myFunction(6,5,4,3,2,1));