// print 1 to 10 with delay of 1 sec after each number gets printed
let n = 30
for(let i=1;i<=n;i++){
    setTimeout(() => {
        console.log(n+1-i);//for ulta coundown
        console.log(i);//for seedha countdown
    },i*200)
}

// setTimeout(function(){
//     console.log('Hello')
// },2*1000);
// setTimeout(function(){
//     console.log('Mello')
// },4*1000);