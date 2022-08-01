function myFunction(arr=[]){
    return arr.reduce((a, b) => a.length <= b.length ? b : a);
}

console.log(myFunction(['I', 'need', 'lololol', 'candy']));