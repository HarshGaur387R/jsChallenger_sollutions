function myFunction(a={}, b='') {

    // if(Object.keys(a).indexOf(b) == -1) return false;
    // return true;

    return b in a;
}


console.log(myFunction({x:'a',y:'b',z:undefined},'z'));