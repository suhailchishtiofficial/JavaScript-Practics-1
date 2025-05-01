//21.	Write a for loop to print numbers from 1 to 50.
// for(let i=1 ; i<=50 ; i++){
//     console.log(i)
// }


//22.	Use a while loop to sum the numbers from 1 to 10.
// let a = 1;
// let sum = 0;
// while(a<11){
//     sum =  sum + a;
//     a++;
// }
// console.log(sum);

//23.	Create a for...of loop to log each character of the string "JavaScript".
// let str ="javascript";
// for(let character of str){
//     console.log(character);
// }


//24.	Write a for loop that skips even numbers between 1 and 20.
// for(let i=1 ; i <21 ; i++){
//     if(i%2 === 0){}
//     else{
//         console.log(i);
//     }
// }
//or
// for(let i=1 ; i <21 ; i++){
//     if(i%2 !== 0){
//      console.log(i); 
// }        
// }


//25.	Use a do...while loop to log numbers from 5 to 1.
// let i=5
// do {
//     console.log(i);
//     i--;
// } 
// while (i>0);


//26.	Create a for loop that calculates the factorial of 5.
// let fac = 1;
// for(var i=5; i>0; i--){
//     fac = fac*i;
// }
// console.log(fac);


//27.	Write a nested loop to print a 3x3 grid of numbers.
// var hold = 1;
// for (var i=1; i<4; i++){
//     var str ="";
//     for(var j=1; j<4; j++){
//         str += `${hold}     `;   
//         hold++;
//     }
//     console.log(str);
// }

//28.	Use a for loop to reverse an array [1, 2, 3, 4].
// var arr = [1,2,3,4,5];
// for (var i=0; i < Math.floor(arr.length / 2); i++){
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - i - 1] = temp;
// }
// console.log(arr);


//29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
// let num = 1;
// while(num<101){
//     if(num%5 === 0) console.log(num);
//     num++
// }

//30.	Use a for...in loop to iterate over an object and log its keys.
// var obj = {
//     name: "a",
//     email:"a@gmail.com",
//     age:26
// }

// for(var key in obj){
//     console.log(key);
// }