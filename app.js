const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const progres = document.querySelector("#progres");

play.addEventListener("click",()=>{
    video.play();
    play.setAttribute("hidden", "");
    pause.removeAttribute("hidden");
});

pause.addEventListener("click",()=>{
    video.pause();
    pause.setAttribute("hidden", "");
    play.removeAttribute("hidden");
});

forward.addEventListener("click",()=>{
    video.currentTime += 10;
});

backward.addEventListener("click",()=>{
    video.currentTime -= 10;
});

video.addEventListener('loadedmetadata', () =>{
    const duration = video.duration;
    progres.setAttribute("max", duration);
});

video.addEventListener('timeupdate', () =>{
    progres.setAttribute("value", video.currentTime);
});

progres.addEventListener('input', ()=>{
    video.currentTime = progres.value;
});