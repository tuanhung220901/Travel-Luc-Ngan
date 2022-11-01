import dataTravel from "./data.js";
function render_Detail_Travel(){
    console.log(dataTravel);
    let idTravel = sessionStorage.getItem("idTravel");
    console.log(idTravel);
    let data
    dataTravel.forEach(travel => {
        if(idTravel == travel.id){
            data = travel;
            return;
        }
    });
    console.log(data);
    let dataDetailTravel = document.querySelector('.content-detail-travel')
    dataDetailTravel.innerHTML = 
    `<div class="backgroud-detail-travel">
    <img class="img" src="${data.listImage[0]}" alt="">
    <img class="img" src="${data.listImage[1]}" alt="">
    <img class="img" src="${data.listImage[2]}" alt="">
</div>
<div class="content-travel">
    <h2 class="title-1">${data.title}</h2>
    <h3 class="title-2">${data.listTitle[0]}</h3>
    <div class="content-2">${data.listContent[0]}</div>
    <img class="img-detail-travel" src="${data.listImage[3]}" alt="">
    <h3 class="title-2">${data.listTitle[1]}</h3>
    <div class="content-2">${data.listContent[1]}</div>
    <img class="img-detail-travel" src="${data.listImage[4]}" alt="">
    <h3 class="title-2">${data.listTitle[2]}</h3>
    <div class="content-2">${data.listContent[2]}</div>
    <img class="img-detail-travel" src="${data.listImage[5]}" alt="">
    <div class = "video-container-youtube" id = "check_video">
        ${data.video}
    </div>
    <h3 class="title-2">Bình luận</h3>
    <div class="fb-comments" data-href="https://tuanhung220901.github.io/Travel-Luc-Ngan/" data-width="100%" data-numposts="5"></div>
</div>`
}
// start();
render_Detail_Travel();