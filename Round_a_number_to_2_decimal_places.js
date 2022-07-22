// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction (a=0.0)
{

return Math.round(a * 100) / 100

}


console.log(myFunction(26.1379));