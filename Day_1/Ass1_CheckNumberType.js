
function checkNumberType(no)
{
    if(no>0)
    {
        return(no +" is a +ve number");

    }
    else if(no<0)
    {
        return(no +" is a -ve number");
    }
    else
    {
        return("Its Zero");
    }
}
let n=7;
console.log(checkNumberType(n));
let n1=-2;
console.log(checkNumberType(n1));
let n2=0;
console.log(checkNumberType(n2));

