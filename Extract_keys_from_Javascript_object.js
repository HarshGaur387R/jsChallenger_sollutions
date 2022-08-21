function myFunction(obj={}){
    
 let ar = Object.keys(obj);

 return ar
}


console.log(myFunction({a:1,b:2,c:3}));