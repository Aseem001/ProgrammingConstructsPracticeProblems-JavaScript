const prompt = require('prompt-sync')();
// 1. Print powers of a 2 until a given index

let index = Number(prompt('Enter the index: '));
let i=1;
let power=0;
while(i<=index && power<256)
{
    power=Math.pow(2, i);
    console.log(power);
    i++;
}


// 3. Flip coin till either heads or tails win 11 times

let countHeads=0;
let countTails=0;
while(countHeads<11 && countTails<11)
{
    var tossResult = Math.floor(Math.random()*10)%2;
    if (tossResult == 0)
        countHeads++;
    else
        countTails++;
}
if(countTails==11)
console.log("Tails won");
if(countHeads==11)
console.log("Heads won");


// 4. Gambling problem

let startMoney = 100;
let betMoney = 1;
let totalMoney=startMoney;
let betCount=0;
let winCount=0;
while(totalMoney>0 && totalMoney<200)
{
    var betResult = Math.floor(Math.random()*10)%2;
    betCount++;
    if(betResult==0)
    {
        //Round lost
        totalMoney-=betMoney;
    }
    else
    {
        //Round Won
        totalMoney+=betMoney;
        winCount++;
    }
}
console.log("Final total money= "+totalMoney);
console.log("Total betting rounds= "+betCount);
console.log("Total won rounds= "+winCount);


