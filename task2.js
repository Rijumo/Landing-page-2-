let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
icon.addEventListener("click",()=>{
    ul.classList.toggle("show");
    console.log(ul);
    if(ul.className == "show" ){
        let bar_item = document.querySelector("#bar");
        bar_item.className = "fa-solid fa-xmark";
    }
    else{
        let bar_item = document.querySelector("#bar");
        bar_item.className = "fa-solid fa-bars";
    }
});