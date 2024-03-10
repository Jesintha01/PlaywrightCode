function sumAll(num)
{
    let sum=0;
    for(let i=0;i<=num;i++)
    {
        sum=sum+i;
    }
    return sum;
}
let no=5;
console.log("Sum of " + no + " is " + sumAll(no));