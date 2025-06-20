let arr = [5,7,-8,-3,0,2,5,-4];
console.log(arr);

// arr = arr.sort();//galat sorting
// console.log(arr);

//Correct sorting
// arr = arr.sort((a,b)=>a-b);//increasing order sorting
// console.log(arr);
// arr = arr.sort((a,b)=>b-a);//decreasing order sorting
// console.log(arr);

arr = arr.sort((a,b) => Math.abs(a)-Math.abs(b));// absolutr sorting
console.log(arr);