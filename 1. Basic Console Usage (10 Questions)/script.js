// 1.	Log your name and favorite hobby to the console.
// console.log("MOHD SUHAIL")
// console.log("Playing BGMI")
//or
//console.log("suhail","bgmi")

// 2.	Perform and log the result of 45 * 2 - 10.
// let a,b,c;
// a=45;
// b=2;
// c=10;
// console.log(a*b-c)
//or 
//console.log(45*2-10);

//3.	Use console.log() to display the current year.
// const year = new Date().getFullYear();
// console.log(year)

//4.	Create two variables for first and last name. Concatenate and log them.

// let firstname= 'MOHD';
// let lastname= 'SUHAIL';
// console.log(`${firstname} ${lastname}`) //:=> templete literals(``)

//5.	Track the value of a variable by logging it before and after updating.

let num = 12;
console.log(num)
num = (Math.random()*20).toFixed()
console.log(num)


//6.	Use console.error() to simulate an error message.

console.error('404 not found')




//7.	Log the square of the number 12 to the console.
let number= 3;
console.log(number**3)

//8.	Print the type of a variable holding the value true.

let bool = true;
console.log(typeof bool)



//9.	Create a variable holding your age and log whether it’s greater than 18.
let age=10;
if(age>18){
    console.log(age)
}

//10.	Log the result of 100 / 0 and observe the output.
console.log(100/0)