const prompt = require ('prompt-sync')();
function recurssive(n)
{
    if(n===0){
        return 1;
    }
    return n*recurssive(n-1);
}
let a= Number(prompt("enter value:") );
let result= recurssive(a);
console.log("result="+result);