function myFunction(arr=[]){
    //return arr.every((e,index,arr)=> e===arr[0]);
    return new Set(arr).size === 1;
}

console.log(myFunction(['10',10,10,10]));