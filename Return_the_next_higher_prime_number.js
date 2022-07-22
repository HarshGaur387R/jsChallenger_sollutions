// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number



function myFunction(a) {

    function isPrime(a) {

        for (let i = 2; i <= Math.sqrt(a); i++) {
    
            if (a % i == 0) {
                return false;
            }
        }
        return true;
    
    }


    while (1) {
        if (isPrime(a)) {
            return a;
        }
        a++;
    }

}


console.log(myFunction(115));
//myFunction(7);

// myFunction(38) : Expected  41
// myFunction(7)  : Expected  7
