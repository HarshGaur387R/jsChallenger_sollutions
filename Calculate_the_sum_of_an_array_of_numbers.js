function myFunction(a=[]){
    
    return a.reduce((acc, cur) => acc + cur, 0);
}


console.log(myFunction([10,100,40]));

//Expected 150