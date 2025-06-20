//map
let arr = [1,2,3,4];
console.log(arr);

// arr = arr.map(function(ele){
//     return ele*ele;
// })

// arr = arr.map((ele)=>{
//     return ele*ele;
// })

arr = arr.map(ele => ele*ele*ele);
console.log(arr);

//filter
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
//filter out odd elements

// arr = arr.filter(function(ele){
//     // if(ele%2==0) return true;
//     // else false;
//     return (ele%2==0);
// });

// short tareeka
// arr = arr.filter(ele => (ele%2==0))
// console.log(arr);