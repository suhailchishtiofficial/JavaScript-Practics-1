// 31.	Create an array of your top 5 favorite movies and log it.
// let arr=["Johnwick","Spiderman","Ironman","Reacher","Needforspeed"];
// arr.forEach(function(value){
//     console.log(value);
// })


// 32.	Find and log the second element of an array.
// let arr=["Johnwick","Spiderman","Ironman","Reacher","Needforspeed"];
// console.log(arr[1]);


// 33.	Add two new elements to the start of an array using .unshift().
// var arr = [1,2,3,4,5]
// arr.unshift(0);
// arr.unshift(-1);


// 34.	Remove the last element of an array and log the updated array.
// let arr=["Johnwick","Spiderman","Ironman","Reacher","Needforspeed"];
// let rem=arr.pop();
// console.log(arr);


// 35.	Use .slice() to extract the first three elements of an array.
// let arr=["Johnwick","Spiderman","Ironman","Reacher","Needforspeed"];
// let sl= arr.slice(0,3);
// console.log(sl);

    
// 36.	Find the index of a specific element in an array using .indexOf().
// let arr=["Johnwick","Spiderman","Ironman","Reacher","Needforspeed"];
// let index=arr.indexOf("Ironman");
// console.log(index);


// 37.	Check if a value exists in an array using .includes().
// var arr = [1,2,3,4,5];
// console.log(arr.includes(6));   
// console.log(arr.includes(2)); 


// 38.	Combine two arrays [1, 2] and [3, 4] using .concat().
    // var arr1=[1,2];
    // var arr2=[3,4];
    // console.log(arr1.concat(arr2));

// * 39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
//     var arr = [5, 2, 9, 1];
//     for(var j = 0; j<arr.length-1; j++){
//         for(var i=0; i<arr.length -j -1; i++){
//             if (arr[i] > arr[i+1]){
//                 var temp = arr[i];
//                 arr[i] =arr[i+1];
//                 arr[i+1] = temp;
//             }
//         }
//     }
// console.log(arr);


// 40.	Write a program that creates a copy of an array without mutating the original.
// var arr= [11, 24, 36, 4, 5];
// var arr2= [...arr];
// console.log(arr2);
// // or
var arr= [11, 24, 36, 4, 5];
var arr2= [];

arr.forEach(function(value){
    arr2.push(value);
});

arr2.pop();
console.log(arr2);
console.log(arr);