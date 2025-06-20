// let x = ['Jeesan',21,8.1,'ug2',false];
// console.log(typeof x);
// console.log(x);

let x = {
    name: 'Jeesan',//key: key value((x[key] or x.key))
    age: 21,
    sgpa: 7.4,
    class: 'ug2',
    'work Exp': false
};
console.log(x);
for (const key in x) {
    console.log(key,x[key]);
}