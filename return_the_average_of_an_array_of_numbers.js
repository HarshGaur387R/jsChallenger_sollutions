function myFunction(arr){

return arr.reduce((acc,cur)=>acc+cur,0) / arr.length;

}

console.log(myFunction([-50,0,50,200])
);

//Expected 50