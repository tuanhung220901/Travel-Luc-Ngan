import {render_Travel} from "./render_travel.js"
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})
let check = document.querySelectorAll(".dacsan")
check.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(btn.getAttribute("value"));
        sessionStorage.setItem("idTravel",btn.getAttribute("value"))
    })
})
render_Travel();