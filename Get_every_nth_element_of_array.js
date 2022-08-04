function myFunction(a=[],n=0){

   let newArr= [];
   let temp = n-1;

   for(let i=temp; i<=a.length; i += n){
    newArr.push(a[i]);
   }

   return newArr;
}


console.log(myFunction([7,2,1,6,3,4,5,8,9,10],2));