// selecting and changing elements by using javascripts

// let x = document.querySelector("h1");//selecting
// //console.log(x);
// setTimeout(function(){
//     x.style.color = 'red';//changing
//     x.style.fontFamily = "Gill sans"
//     x.style.backgroundColor = 'brown'
// },6000)

// let y = document.querySelector('h2');//select
// setTimeout(function(){
//     y.style.color = 'blue';//changes
//     y.style.backgroundColor = 'lightgreen'
//     y.innerHTML = 'changed'
// },3*1000)

//Event Listners
let x = document.getElementById("ele1");//pikachu
let y = document.getElementById("ele2");//charizard
let z = document.getElementById("ele3");//mewtwo

x.addEventListener("click", function(){
    x.style.color = 'yellow';
    x.style.backgroundColor = 'red';
})

y.addEventListener("mouseenter", function(){
    y.style.color = 'white';
    y.style.backgroundColor = 'orange';
})

y.addEventListener("mouseleave", function(){
    y.style.color = 'black';
    y.style.backgroundColor = 'white';
})

y.addEventListener("click", function(){
    z.style.color = 'black';
    z.style.backgroundColor = 'purple';
})

z.addEventListener("click", function(){
    x.style.color = 'white';
    x.style.backgroundColor = 'green';
    x.innerHTML = 'Bulbasaur'
})