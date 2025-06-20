//string built in functions -> toUpperCase,toLowerCase,trim,indexOf,lastIndexOf,slice(substring),split(stringstream)

//for(i=0;i<s.length;i++) console.log(s[i]); -//> works
// for (const ele of s) {//it also works
//     console.log(ele);
// }
// array.forEach(ele => {
//     console.log(ele);
// });//it doesn't works!

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.toLocaleUpperCase());

// s2 = "   sk Jeesan  ";
// console.log(s2,s2.length);
// s3 = s2.trim();
// console.log(s3,s3.length);

// let s = "SkMdJeesan";
// console.log(s);
// console.log(s.slice(3)); // prints index 3 to end
// console.log(s.slice(3,6));// prints index 3 to 5
// s = s.slice(3,7);
// console.log(s);

let s = "Hello my name is Jeesan And I am a student of Jadavpur University";
//console.log(s.split(' '));
let arr = s.split(' ');
//console.log(arr);
for (const ele of arr) {
    console.log(ele);
}

