function print1to(n){
    for(let i=1;i<=n;i++){
        console.log(i);
    }
    console.log();
}

// print1to(17);
// print1to(5);

function sum(a,b){
    return a*a+b*b;
}

//console.log(sum(2,5));

// some mathematical built in function
console.log(Math.abs(-5.6));

console.log(Math.max(5,5.1,5.4));
console.log(Math.min(5,5.1,5.4));

console.log(Math.pow(2,3));
console.log(Math.log(2.818));
console.log(Math.log10(100));

console.log(Math.sqrt(529));
console.log(Math.cbrt(512));

console.log(Math.floor(7.5));// [G.I.F]
console.log(Math.floor(-7.5));
console.log(Math.ceil(2.5));
console.log(Math.ceil(-2.5));

//Math.random() generates random real number between 0 to 1 (excluded)
console.log(Math.random());