function menuresponsiv(){
    var x = document.getElementById("menu-nav");
    if (x.className === "navbar_menu") {
        x.className += "responsiv";
    } else {
        x.className = "navbar_menu";
    }   
}
const navsticky=document.getElementById("navbar_sticky")

window.onscroll=function(){
    // console.log("scroll")
    addnavsticky()
}
function addnavsticky(){
    if (window.pageYOffset === 0) {
        navsticky.classList.remove("navbar_sticky")
    } else {
        navsticky.classList.add("navbar_sticky")
    }
}
// const open=document.getElementById('open');
// const close=document.getElementById('close');
// const mdl=document.querySelector('.mdl_content');
// const contPorta=document.querySelector('.portafolio_cuerpo_content')

// open.addEventListener('click',()=>{
//     mdl.classList.add('show')
//     // contPorta.classList.add('show-block')
// })

// close.addEventListener('click',()=>{
//     mdl.classList.remove("show")
//     // contPorta.classList.remove("show-block")
// })