const prompt = require('prompt-sync')();
// 1. Print powers of a 2 until a given index

let index = Number(prompt('Enter the number: '));
for(i=1;i<=index;i++)
{
    console.log(Math.pow(2,i));
}


// 2. Print the nth harmonic number

let n = Number(prompt('Enter the number: '));
harmonicNo=0;
for(i=1;i<=n;i++)
{
    harmonicNo+=1/i;
}
console.log(n+"th Harmonic number= "+harmonicNo);


// 3. Find if number is prime or not

let n = Number(prompt('Enter the number: '));
let flag=true;
if (n <= 1)
flag=false;
else 
{
    for (let i = 2; i < n; i++) 
    {
        if (n % i == 0)
            flag = false;        
    }
}
if(flag==false)
console.log("It is not a prime number");
if(flag==true)
console.log("It is a prime number");


// 4. Take range of numbers as input and print the prime numbers

var numArray= new Array(5);
var primeNumberArr =[];
for(let i=0;i<numArray.length;i++)
{
    numArray[i]=Number(prompt('Enter the number: '));
}
for(let i=0;i<numArray.length;i++)
{
    let flag = true;
    if (numArray[i] <= 1)
        flag = false;
    else 
    {
        for (let j = 2; j < numArray[i]; j++) 
        {
            if (numArray[i]%j==0)
                flag = false;
        }
    }
    if(flag==true)
    primeNumberArr[i]=numArray[i];
}
console.log("Prime numbers:")
primeNumberArr.forEach(element=>console.log(element));


// 5.Factorial of a number n

let n = Number(prompt('Enter the number n: '));
let fact = 1;
if (n < 0)
    console.log("Enter a positive number");
else 
{
    if (n == 0)
        fact = 1;
    for (let i = 2; i <= n; i++) 
    {
        fact *= i;
    }
    console.log(n + "!=" + fact);
}


// 6. Print prime factors of a number n

let n = Number(prompt('Enter the number: '));
// Print the number of 2s that divide n
while (n % 2 == 0) 
{
    console.log("2");
    n = n / 2;
}  
// n must be odd at this point. So we can skip  
// one element (Note i = i+2)  
for (let i = 3; i * i <= n; i = i + 2) 
{
    // While i divides n, print i and divide n  
    while (n % i == 0) 
    {
        console.log(i);
        n = n / i;
    }
}
// This condition is to handle the case when after division by 2 n  
// is a prime number greater than 2  
if (n > 2)
    console.log(n);  
