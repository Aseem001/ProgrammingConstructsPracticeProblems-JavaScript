const prompt = require('prompt-sync')();
// 1. Temperature conversion

let options=prompt('Enter\na-To convert fahrenheit to celcius\nb-To convert celcius to fahrenheit\n');
switch(options)
{
    case 'a':
        degF=Number(prompt('Enter temperature in degree fahrenheit: '));
        fahrenheitToCelcius(degF);
        break;
    case 'b':
        degC = Number(prompt('Enter temperature in degree celcius: '));
        celciusToFahrenheit(degC);
        break;
}
function fahrenheitToCelcius(degF)
{
    if(degF>=32 && degF<=212 )
    {
    let degC= (degF-32)*(5/9);
    console.log("Celcius: "+degC);
    }
    else
    {
        console.log("Incorrect fahrenheit value");
    }
}
function celciusToFahrenheit(degC)
{
    if(degC>=0 && degC<=100 )
    {
    let degF= (degC*9/5)+32;
    console.log("Fahrenheit: "+degF);
    }
    else
    {
        console.log("Incorrect celcius value");
    }
}


// 2. Palindrome function

let m=Number(prompt('Enter the number: '));
isPalindrome(m);
//Function to check palindrome
function isPalindrome(n)
{
    // get the reverse of n 
    let revNum = reverseDigits(n); 
    // Check if rev_n and n are same or not. 
    if (revNum == n) 
    console.log("The number is a palindrome");
    else
    console.log("The number is not a palindrome"); 
}
//Function to reverse digits
function reverseDigits(num)
{
    let reverseNum = 0;
    while (num > 0) 
    {
        reverseNum = reverseNum * 10 + num % 10;
        num = parseInt(num/10);
    }
    return reverseNum;
}