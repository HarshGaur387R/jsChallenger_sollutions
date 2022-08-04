function myFunction(min,max){


    let arr = [];
    
    for (let i = min; i <= max; i++) {
       arr.push(i);       
    }

   return arr;
}


console.log(myFunction(-5, 5));