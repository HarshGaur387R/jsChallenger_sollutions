// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a="", b="")
{

a = a.replace("%","");
b = b.replace("%","");

let s1 = b.split("");

s1 = s1.reverse();
s1 = s1.join("");

let temp = a.charAt(0).toUpperCase();

return temp+a.substring(1,a.length)+s1;

}

console.log(myFunction('down', 'nw%ot'));


