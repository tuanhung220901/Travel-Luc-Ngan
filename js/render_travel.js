import dataTravel from "./data.js";
function render_Travel(){
    let renderTravel = document.querySelector(".render-travel")
    var delay = 0;
    let htmls = dataTravel.map(data => {
        if(data.check == true)
        return `
        <div class="box" data-aos="fade-up" data-aos-delay="${delay += 150}">
            <div class="image">
                <img src="${data.img}" alt="">
            </div>
            <div class="content">
                <h3>${data.title}</h3>
               
                <a href="./detail_Travel.html" value = '${data.id}' class = "travel">Đọc thêm <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
        `
    });
    console.log(htmls);
    renderTravel.innerHTML = htmls.join("");
    let checkTravel = document.querySelectorAll(".travel");
    console.log(checkTravel);
    checkTravel.forEach((btn=>{
        console.log("aaaaaaaaa");
        btn.addEventListener("click",function(e){
            console.log(btn.getAttribute("value"));
            sessionStorage.setItem("idTravel",btn.getAttribute("value"))
            // document.querySelector(".ten-phim").innerHTML = `
            // <h1>LỊCH CHIẾU - ${sessionStorage.getItem("tenPhim")}</h1>
            //`
        })
    }))
}
// start();
export {render_Travel};