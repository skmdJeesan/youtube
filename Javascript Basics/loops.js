//pattern printing!
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log(i);
//     }
// }
let arr = [1,2,5,4];
//for(i=0;i<arr.length;i++) console.log(i,arr[i]);
for (const ele of arr) {
    console.log(ele);
}//you can't print index and cant modify the values of arr

arr.forEach((ele,i) => {
    console.log(ele,i);
});