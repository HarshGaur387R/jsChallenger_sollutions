function myFunction(a={},b=''){

    // if(b in a){
    //     if(a[b] == null || a[b] == undefined) return false;
    //     return true;
    // }
    // else return false;

    return Boolean(a[b]);
}


console.log(myFunction({x:'a',y:null,z:'c',u:undefined},'x'));