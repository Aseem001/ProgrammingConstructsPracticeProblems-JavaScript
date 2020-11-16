// 1. Random function to get a single digit

let num = Math.floor(Math.random()*10);
console.log(num);


// 2. Random to get a dice number between 1 to 6

// Returns a value between 0-5 and then adding 1 to make range 1-6
let diceNum=Math.floor(Math.random()*6)+1;
console.log(diceNum);


// 3. Add two random dice number and print result

diceNum1=Math.floor(Math.random()*6)+1;
console.log("Dice1 value: "+diceNum1);
diceNum2=Math.floor(Math.random()*6)+1;
console.log("Dice2 value: "+diceNum2);
console.log("Sum: "+(diceNum1+diceNum2));


// 4. Find sum and average of 5 random 2 digit values

numArray = [];
sum=0;
for(i=0;i<5;i++)
{
    numArray[i]=Math.floor(Math.random()*6)+1;
    console.log(numArray[i]);
    sum+=numArray[i];
}
average=sum/5;
console.log("Sum :"+sum);
console.log("Average :"+average);


// 5. Unit conversion
console.log("1 foot = 12 inches");
console.log("1 metre = 3.28 feet");
console.log("42 inches = "+42/12+" feet");
a=60/3.28;
b=40/3.28;
console.log("Area of 1 60feet x 40feet plot in metres: "+a*b);
console.log("Area of 25 60feet x 40feet plot in metres: "+a*b*25);