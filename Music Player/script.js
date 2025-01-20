let arr = [
    {name: 'Big Dawgs', url: './Musics/bigdawgs.mp3', img:'./images/biddawg.png', duration: '3:10'},
    {name: 'The Last Dance', url: './Musics/thelastdance.mp3', img:'./images/thelastdance.jpeg', duration: '1:23'},
    {name: 'DAMNSON', url: './Musics/damnson.mp3', img:'./images/damson.jpg', duration: '2:30'},
    {name: 'Ayyayyo', url: './Musics/ayy.mp3', img:'./images/ayy.jpeg', duration: '3:40'}
];
//console.log(arr);

let allSongs = document.querySelector('#all-songs');
let poster = document.querySelector('#left');
let play = document.querySelector('#play');
let backward = document.querySelector('#backward');
let forward = document.querySelector('#forward');
let audio = new Audio();
let selectedSong = 0;

function mainfunction(){
    let s = "";
    arr.forEach(function(ele,idx){
        s += `<div class="song-cards" id=${idx}>
                    <div id="part1">
                        <img src=${ele.img} alt="">
                        <h3>${ele.name}</h3>
                    </div>
                    <h6>${ele.duration}</h6>
                </div>`;
    });
    allSongs.innerHTML = s;
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}
mainfunction();

allSongs.addEventListener("click", function(dets){
    selectedSong = dets.target.id;
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    mainfunction();
    audio.play();
})



let flag = 0
play.addEventListener('click',function(){
    if(flag==0){
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        mainfunction();
        audio.play();
        flag = 1
    }
    else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainfunction();
        audio.pause();
        flag = 0
    }
})

forward.addEventListener('click',function(){
    selectedSong++
    selectedSong %= arr.length
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    mainfunction()
    audio.play()
})

backward.addEventListener('click',function(){
    if(selectedSong!=0) selectedSong--
    else selectedSong = arr.length - 1
    selectedSong %= arr.length
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    mainfunction()
    audio.play()
})