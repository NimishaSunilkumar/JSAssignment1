let number=parseInt(prompt("Please Enter a number between 0 and 1 million"));
if(number>=0 && number<=1000000){
    let sum=0;
     for(let i=0;i<=number;i++){
        sum+=i;
     }
     console.log(`The sum of numbers from 1 to${number}is:${sum}`);
    }
    else{
        console.log("Invalid number");
    }