// hints
// 1) convert the input into characters
// 2) loop them in reverse direction
// 3) concate the string
// 4) print the new string

//let fname="Jesintha";
// let fnamelenth=fname.length;
// console.log(fnamelenth);
// console.log(`Reverse string of ${fname} :`)
// for(i=fnamelenth;i>=0;i--)
// {
//     console.log(fname.charAt(i))
// }

let fname="Jesintha";
let fnamechars=fname.split("");
console.log(fnamechars);
let reversefname="";
function reversename(nme)
{
    for(let i=nme.length;i>=0;i--)
    {
        reversefname+=fnamechars[i];  
    }
    return reversefname;
}
console.log("Reverse String:" + reversename(fname));
